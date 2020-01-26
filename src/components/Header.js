import React from "react";
import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default function Header(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                justify="space-between" 
                container 
                spacing={24}
                >
                <Grid item>
                    <Typography type="title" color="inherit">
                    Employee Directory
                    </Typography>
                </Grid>
                <Grid item>
                    <div>
                    <Button raised color="inherit">
                        Sort by name
                    </Button>
                    </div>
                </Grid>
                <Grid item>
                    <div>
                    <Button raised color="inherit">
                        Filter by Age 18+
                    </Button>
                    </div>
                </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
    )
}