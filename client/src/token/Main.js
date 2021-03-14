import React, { useEffect, useState } from "react";
import Axios from "axios";

import Admin from '../components/users/Admin';
import Student from '../components/users/Student';

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role === "student" && <Student />}
      {role === "" && <Student />}
      {role === "admin" && <Admin />}
    </div>
  );
}