import React, { useState } from 'react';
import UserNav from "../UserNav";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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


const EditUserInfo = () => {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const editInfo = () => {
    axios.post("http://localhost:3005/api/addNewInfo", {
      username: username,
      name: name,
      role: role,
    });
    history.push('/userManage');
  }

  const handleChange = () => {
    history.push('/userManage')
  }
  return (
    <div>
      <UserNav />
      <div className="center">
        <h1>Edit User Info</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Username" variant="outlined" className={classes.textField} 
          onChange={(e) => {
            setUsername(e.target.value);
          }}/>
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textField}
          onChange={(e) => {
            setName(e.target.value);
          }}/>
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Role" variant="outlined" className={classes.textField}
          onChange={(e) => {
            setRole(e.target.value);
          }}/>
        </form>

        <div className="button-padding-top">
          <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleChange}
              >
                Back
          </Button>

          <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={editInfo}
              >
                Submit
          </Button>

        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
