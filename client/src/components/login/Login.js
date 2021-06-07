import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useHistory } from "react-router-dom";
import Axios from "axios";

// Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  button: {
    padding: "20px"
  }
}));

const Login = () => {
  const classes = useStyles();

  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3005/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
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
    </div>
    <Container className={classes.container} maxWidth="xs">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Username"  
                  size="small" 
                  variant="outlined" 
                  onChange={(e) => {
                      setUsernameLog(e.target.value);
                    }}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {
                    setPasswordLog(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} color="primary" fullWidth type="submit" variant="contained" onClick={login}>
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && <h3>{message}</h3>}
    </Container>
    </>
  );
};

export default Login;
