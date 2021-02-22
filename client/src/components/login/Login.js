import React, {useState} from 'react';
import Axios from "axios";
import '../../App.css';

const Login = () => {
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post("http://localhost:3005/login", {
          username: usernameLog,
          password: passwordLog,
        }).then((response)=> {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                setLoginStatus(`Username: ${response.data[0].username}`);
            }
        })
      };

    return (
        <div className="login">
           <h1>Login</h1>
           <input type="text" placeholder="Username..." onChange={(e)=>{
               setUsernameLog(e.target.value);
           }}/>
           <input type="password" placeholder="Password..." onChange={(e)=>{
               setPasswordLog(e.target.value);
           }}/>
           <button onClick={login}>Login</button>

           <h1>{loginStatus}</h1>
        </div>
    );
};

export default Login;