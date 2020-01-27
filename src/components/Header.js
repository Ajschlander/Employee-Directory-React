import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";


export default function Header(){

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
                {/* <Grid item>
                    <div>
                    <Button color="inherit">
                        Sort By Name
                    </Button>
                    </div>
                </Grid>
                <Grid item>
                    <div>
                    <Button color="inherit">
                        Filter By Female Only
                    </Button>
                    </div>
                </Grid> */}
                </Grid>
            </Toolbar>
            </AppBar>
    )
}