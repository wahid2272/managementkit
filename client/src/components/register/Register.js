import React, {useState} from 'react';
import '../../App.css';

const Register = () => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    return (
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
            <label>Password</label>
            <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/>
            <button>Register</button>
        </div>
    );
};

export default Register;