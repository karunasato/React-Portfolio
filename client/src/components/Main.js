import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Main.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto"
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50vh'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h1> Hello!</h1>
          </Paper>
          <div className="overlay" style={{width:"100%", position:"relative",top:"-50vh",height: "100%", background:"black", opacity:"0"}}></div>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
