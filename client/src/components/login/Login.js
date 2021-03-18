import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../../App.css";

const Login = () => {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3005/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
      if(response.status === 200) {
        history.push('/dashboard');
      }   
    });
  }; 

  return (
    <>
    <Navbar/>
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUsernameLog(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setPasswordLog(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
    </>
  );
};

export default Login;
