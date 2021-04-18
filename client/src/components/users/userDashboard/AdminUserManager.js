import React, { useEffect, useState } from 'react';
import UserNav from '../UserNav';
import axios from "axios";

const AdminUserManager = () => {
    const [users, setUsers] =useState([]);
        useEffect(() => {
            axios.get(`http://localhost:3005/getAll`)
                .then(response => setUsers(response.data))              
        }, []);

    return (
        <div>
            <UserNav/>
            <h1>Hello!</h1>
            <div>{users.map(user=> <li key={user.id}>{user.username}</li>)}</div>
        </div>
    );
};

export default AdminUserManager;