import React, { useState } from "react";
import UserNav from "../users/UserNav";
// import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../../App.css";

const Reset = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [username, setUsername] = useState("");

  // const history = useHistory();

  const registerUser = () => {
    Axios.post("http://localhost:3005/reset-password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
      username: username
    });
    // history.push('/dashboard');
  };

  return (
    <>
    <UserNav />
    <div className="registration">
      <h1>Reset Password</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Old Password"
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Set new password"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Confirm new password"
        onChange={(e) => {
          setConfirmNewPassword(e.target.value);
        }}
      />
      <button onClick={registerUser}>Reset</button>
    </div>
    </>
  );
};

export default Reset;
