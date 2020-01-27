import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from "axios";
import EmployeeCard from './EmployeeCard';

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function SelectUsers() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleChange = event => {
      setAmount(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const dynamicSort = property => {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a.name[property] < b.name[property]) ? -1 : (a.name[property] > b.name[property]) ? 1 : 0;
            return result * sortOrder;
        }
    };

    const filterFemale = (gender) => {
        return gender.gender === "female";
    }
    

    const [amount, setAmount] = useState("");
    const [users, setUsers] = useState([]);
    const [sortedArr, setSortedArr] = useState(users);

    useEffect(()=>{
        const getUsers = async () => {
            let res = await axios.get(`https://randomuser.me/api/?results=${amount}`);
            let data = res.data;
            setUsers([]);
            setUsers(data.results);
        }
        getUsers();
    }, [amount]);
  
    return (
      <div>
        <Button onClick={() => {
            setSortedArr(users.sort(dynamicSort("first")));
        }}>
            Sort By Name
        </Button>
        <Button onClick={() => {
            // Filter array for females only
            let filtered = users.filter(filterFemale);
            setUsers(filtered);
        }}>
            Filter By Female Only
        </Button>
        <Button className={classes.button} onClick={handleOpen}>
          Select how many users you would like to generate
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Amount</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={amount}
            onChange={handleChange}
          >
            <MenuItem value={null}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        {users.map(u => (
            <EmployeeCard name={u.name.first} gender={u.gender} img={u.picture.large} email={u.email} key={u.login.username}/>
        )
        )}
      </div>
    );
  }