import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Axios from "axios";
import "../../App.css";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3005/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response)=> {
        console.log(response);
    })
  };

  return (
    <>
    <Navbar />
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
      <button onClick={register}>Register</button>
    </div>
    </>
  );
};

export default Register;
