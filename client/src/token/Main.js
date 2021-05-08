import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';

import Admin from '../components/users/adminUser/Admin';
import Student from '../components/users/studentUser/Student';

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const cookies = new Cookies();
    let data = cookies.get('role');
    if(data === 'student' || data === 'admin') {
      setRole(data);
    }
    else{
      Axios.get("http://localhost:3005/login").then((response) => {
        if (response.data.loggedIn === true) {
          setRole(response.data.user[0].role);
          cookies.set('role', response.data.user[0].role)
        }
      });
    }
    
  }, []);

  return (
    <div>
      {role === "student" && <Student />}
      {/* {role === "" && <Student />} */}
      {role === "admin" && <Admin />}
    </div>
  );
}
