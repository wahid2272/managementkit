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

const Register = () => {
  const classes = useStyles();

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const history = useHistory();

  const registerUser = () => {
    Axios.post("http://localhost:3005/register", {
      username: usernameReg,
      password: passwordReg,
    });
    history.push('/dashboard');
  };

  return (
    <>
    <UserNav />
    <div className="registration">
      <h1>Registration</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Set Username" variant="outlined" 
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}/>
      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Set Password" variant="outlined" 
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}/>
      </form>

      <Button className={classes.button} variant="contained" color="primary" onClick={registerUser}>Register</Button>
    </div>
    </>
  );
};

export default Register;
