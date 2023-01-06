import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h3">
        Experience the full power of Quillbot
      </Typography>
      <Typography component="p">
        Upgrade to Quillbot Premium for unlimited rewriting and error-free writing.
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Upgrade Now
      </Button>
    </Paper>
  );
}
