import React, {useState, useEffect} from 'react';
import UserNav from "../UserNav";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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

    const [studyInfo, setStudyInfo] =useState([]);

    useEffect(()=> {
      axios.get(`http://localhost:3005/api/getAllStudyInfo`)
          .then(response => setStudyInfo(response.data));
    })

    const handleChange = () => {
        history.push('/dashboard')
    }

    return (
        <>
            <UserNav />
            <div className="center">
                <h1>Study Info</h1>

                <div className={classes.control}>
                    {studyInfo.map(info=> 
                    <div key={info.id}>{info.program}&nbsp;${info.price}</div>)}
                </div>

                <div className="center">
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
                    <Button className={classes.button} variant="contained" color="primary" >Create new</Button>
                </div>
            </div>
        </>
    );
};

export default WebsiteManager;
