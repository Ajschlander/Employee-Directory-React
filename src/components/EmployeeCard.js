import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom: "1rem"
    },
    media: {
      height: 250,
    },
  });

export default function EmployeeCard(props){
    const classes = useStyles();
    return (
        <Grid>
            <Grid item>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Person image"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.email}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
        </Grid>
  );
}