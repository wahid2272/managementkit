import React from 'react';
import UserNav from "../UserNav";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
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
                <h1>Information regarding study opportunities will be added here.</h1>

                <div className="center">
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
                </div>
            </div>
        </>
    );
};

export default WebsiteManager;