import React from 'react';
import UserNav from '../UserNav';
import { useHistory } from 'react-router-dom';
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
    color: "black",
    fontSize: "3em"
  },
}));

const Student = () => {
  const classes = useStyles();
  
  const [spacing] = React.useState(2);
  const history = useHistory();

  const ResetPassword = () => {
    history.push('/reset')
  }

  const StudyInfo= () => {
    history.push('/studyInfo')
  }


  return (
    <div>
      <UserNav/>
      <h1 className={classes.heading}>Student Page</h1>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>

            <Card className={classes.card}>
              <CardContent>
                <h1>Password Reset</h1>
              </CardContent>
              <CardActions>
                <Button color="primary" onClick={ResetPassword}>Change your password</Button>
              </CardActions>
            </Card>

            <Card className={classes.card}>
              <CardContent>
                <h1>Study Info</h1>
              </CardContent>
              <CardActions>
                <Button color="primary" onClick={StudyInfo}>Check latest info</Button>
              </CardActions>
            </Card>
      
          </Grid>
        </Grid>
      </Grid> 
    </div>
  );
}; 

export default Student; 
