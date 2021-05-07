import React, { useState } from "react";
import UserNav from "../users/UserNav";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

const Register = () => {
  const classes = useStyles();

  const [nameReg, setNameReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const history = useHistory();

  const registerUser = () => {
    axios.post("http://localhost:3005/api/register", {
      name: nameReg,
      username: usernameReg,
      password: passwordReg,
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
      <h1>Registration</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" 
        onChange={(e) => {
          setNameReg(e.target.value);
        }}/>
      </form>

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

      <div>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={registerUser}>Register</Button>
      </div>
    </div>
    </>
  );
};

export default Register;
