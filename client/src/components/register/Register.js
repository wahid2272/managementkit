import React, { useState } from "react";
import UserNav from "../users/UserNav";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../../App.css";

const Register = () => {
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
      <input
        type="text"
        placeholder="Set username"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Set password"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />
      <button onClick={registerUser}>Register</button>
    </div>
    </>
  );
};

export default Register;
