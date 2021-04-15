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
    width: "10em",
    padding: "22px",
    margin: theme.spacing(2)
  }
}));

const Reset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");

  const classes = useStyles();

  const history = useHistory();

  const registerUser = () => {
    Axios.post("http://localhost:3005/reset-password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
      username: username
    });
    history.push('/dashboard');
  };

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

      {/* <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      /> */}
      {/* <input
        type="text"
        placeholder="Old Password"
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
      /> */}
      {/* <input
        type="text"
        placeholder="Set new password"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      /> */}
      {/* <input
        type="text"
        placeholder="Confirm new password"
        onChange={(e) => {
          setConfirmNewPassword(e.target.value);
        }}
      /> */}
      {/* <button onClick={registerUser}>Reset</button> */}

      <Button className={classes.button} variant="contained" color="primary" onClick={registerUser}>Reset</Button>
    </div>
    </>
  );
};

export default Reset;
