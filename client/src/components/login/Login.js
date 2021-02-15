import React, {useState} from 'react';
import '../../App.css';

const Login = () => {
    const [usernameLog, setUsernameLog] = useState('');
    return (
        <div className="login">
           <h1>Login</h1>
           <input type="text" placeholder="Username..."/>
           <input type="text" placeholder="Password..."/>
           <button>Login</button>
        </div>
    );
};

export default Login;