import React, { useState } from "react";
import UserNav from "../users/UserNav";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  button: {
    width: "9em",
    padding: "22px",
    margin: theme.spacing(0.5)
  }
}));

const Reset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");

  const classes = useStyles();

  const history = useHistory();

  const registerUser = () => {
    Axios.post("http://localhost:3005/api/reset-password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
      username: username
    });
    history.push('/dashboard');
  };

  const handleChange = () => {
    history.push('/dashboard')
  }

  return (
    <>
    <UserNav />

    <div className="registration">
      <h1>Reset Password</h1>
      <form className={classes.root} noValidate autoComplete="off">
       <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => {
          setUsername(e.target.value);
        }} />   
    </form>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Old Password" variant="outlined" 
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}/>
    </form>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Set New Password" variant="outlined" onChange={(e) => {
          setNewPassword(e.target.value);
        }}/>
    </form>

      <div>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={registerUser}>Reset</Button>
      </div>

    </div>
    </>
  );
};

export default Reset;
