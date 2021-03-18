import React from 'react';
import UserNav from './UserNav';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    width: "300px",
    margin: "2em",
    padding: "1em"
  },
  heading: {
    textAlign: "center",
    color: "green",
    fontSize: "3em"
  },
}));

const Admin = () => {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div>
      <UserNav/>
      <h1 className={classes.heading}>Admin Page</h1>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            
            <Card className={classes.card}>
              <CardContent>
                <h1>User Management</h1>
              </CardContent>
              <CardActions>
                <Button color="primary">Click to manage</Button>
              </CardActions>
            </Card>

            <Card className={classes.card}>
              <CardContent>
                <h1>Password Reset</h1>
              </CardContent>
              <CardActions>
                <Button color="primary">Change your password</Button>
              </CardActions>
            </Card>
      
          </Grid>
        </Grid>
      </Grid> 
    </div>
  );
};

export default Admin;
