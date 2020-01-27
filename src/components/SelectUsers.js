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

    const [amount, setAmount] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getUsers = async () => {
            let res = await axios.get(`https://randomuser.me/api/?results=${amount}`);
            let data = res.data;
            console.log(data.results);
            setUsers([]);
            setUsers(data.results);
        }
        getUsers();
    }, [amount]);
  
    return (
      <div>
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
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        {users.map(u => (
            <EmployeeCard name={u.name.first} gender={u.gender} img={u.picture.large} email={u.email} key={u.id.value}/>
        )
        )}
      </div>
    );
  }