import React, { useState } from 'react';
import UserNav from "../../UserNav";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../../../App";

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  button: {
    width: "10em",
    padding: "22px",
    margin: theme.spacing(0.5)
  },
  table: {
    minWidth: 750,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));

const EditStudyInfo = () => {
  const classes = useStyles();
  const history = useHistory();

  const [program, setProgram] = useState("");
  const [startDate, setStatrtDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  const editInfo = () => {
    axios.post("http://localhost:3005/api/addNewInfo", {
      program: program,
      startDate: startDate,
      endDate: endDate,
      price: price,
    });
    history.push('/websiteManage');
  }

  const handleChange = () => {
    history.push('/websiteManage')
  }

  return (
    <div>
      <UserNav />
      <div className="center">
        <h1>Edit Study Info</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Program Name" variant="outlined" className={classes.textField} 
          onChange={(e) => {
            setProgram(e.target.value);
          }}/>
        </form>

        <form className={classes.root} noValidate>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            // defaultValue="2021-01-01"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
            onChange={(e) => {
              setStatrtDate(e.target.value);
            }}
          />
          </form>

          <form className={classes.root} noValidate>
          <TextField
            id="date"
            label="End Date"
            type="date"
            // defaultValue="2021-01-01"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Price" variant="outlined" className={classes.textField}
          onChange={(e) => {
            setPrice(e.target.value);
          }}/>
        </form>

        <div className="button-padding-top">
            <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={editInfo}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default EditStudyInfo;
