import React, { useEffect, useState } from 'react';
import UserNav from '../UserNav';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
        textAlign: "center",
        fontSize: "2em"
    },
    heading: {
      textAlign: "center",
      color: "green",
      fontSize: "3em"
    },
  }));

const AdminUserManager = () => {
    const classes = useStyles();
    const [users, setUsers] =useState([]);
        useEffect(() => {
            axios.get(`http://localhost:3005/getAll`)
                .then(response => setUsers(response.data))              
        }, []);

    return (
        <div>
            <UserNav/>
            <h1 className={classes.heading}>Manage Users</h1>
            <div className={classes.control}>
                {users.map(user=> 
                <div key={user.id}>{user.name}</div>)}
            </div>
        </div>
    );
};

export default AdminUserManager;