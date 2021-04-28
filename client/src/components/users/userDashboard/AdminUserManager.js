import React, { useEffect, useState } from 'react';
import UserNav from '../UserNav';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../../App.css";

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
    button: {
       width: "9em",
       padding: "22px",
       margin: theme.spacing(0.5)
  }
  }));

const AdminUserManager = () => {
    const classes = useStyles();
    const history = useHistory();

    const [users, setUsers] =useState([]);
        useEffect(() => {
            axios.get(`http://localhost:3005/getAll`)
                .then(response => setUsers(response.data))              
        }, []);

    const handleChange = () => {
        history.push('/dashboard')
        }

    return (
        <div>
            <UserNav/>
            <h1 className={classes.heading}>Manage Users</h1>
            <div className={classes.control}>
                {users.map(user=> 
                <div key={user.id}>{user.name}</div>)}
            </div>
            
            <div className="center">
                <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
            </div>

        </div>
    );
}; 

export default AdminUserManager;