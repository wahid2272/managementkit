import React from 'react';
import UserNav from "../../UserNav";
import { useHistory } from "react-router-dom";
import "../../../../App";

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  button: {
    width: "10em",
    padding: "22px",
    margin: theme.spacing(0.5)
  },
  table: {
    minWidth: 750,
  }
}));

const EditInfo = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = () => {
    history.push('/websiteManage')
  }

  return (
    <div>
      <UserNav />
      <div className="center">
        Hello

        <div className="button-padding-top">
            <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
            <Button className={classes.button} variant="contained" color="primary" >Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
