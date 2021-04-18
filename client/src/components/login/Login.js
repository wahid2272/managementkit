import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
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

const Login = () => {
  const classes = useStyles();

  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3005/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      //console.log(response);
      if(response.status === 200) {
        history.push('/dashboard');
      }   
    }).catch(err => {
      setMessage("Wrong username/password combination!")
    })
  }; 

  return (
    <>
    <Navbar/>
    <div className="login">
      <h1>Login</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Username" variant="outlined" 
        onChange={(e) => {
          setUsernameLog(e.target.value);
        }}/>
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Password" variant="outlined" 
      onChange={(e) => {
        setPasswordLog(e.target.value);
      }}/>
    </form>

     <Button className={classes.button} variant="contained" color="primary" onClick={login}>Login</Button>

      {message && <h3>{message}</h3>}
    </div>
    </>
  );
};

export default Login;
