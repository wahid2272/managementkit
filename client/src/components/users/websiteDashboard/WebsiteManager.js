import React, { useState } from 'react';
import UserNav from "../UserNav";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
    button: {
      width: "9em",
      padding: "22px",
      margin: theme.spacing(0.5)
    }
  }));

const WebsiteManager = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleChange = () => {
        history.push('/dashboard')
    }

    return (
        <>
            <UserNav />
            <div className="center">
                Check!

                <div>
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
                </div>
            </div>
        </>
    );
};

export default WebsiteManager;