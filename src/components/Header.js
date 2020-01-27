import React from "react";
import { Grid, AppBar, Toolbar, Typography, Button, InputBase, makeStyles, fade } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import EmployeeCard from "./EmployeeCard";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));

const sortByName = (arr) => {
    // Sort by first name function
    arr.sort()
}

export default function Header(){
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                justify="space-between" 
                container 
                spacing={10}
                >
                <Grid item>
                    <Typography type="title" color="inherit">
                    Employee Directory
                    </Typography>
                </Grid>
                <Grid item>
                    <div>
                    <Button color="inherit" onClick={sortByName}>
                        Sort by name
                    </Button>
                    </div>
                </Grid>
                <Grid item>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
    )
}