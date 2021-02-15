import React from 'react';
import '../../App.css';

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text"/>
            <input type="password"/>
            <button type="submit">Submit</button>
        </div>
    );
};

export default Login;