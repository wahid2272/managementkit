import React, { useState } from 'react';
import UserNav from "../UserNav";
import { useHistory, useLocation  } from "react-router-dom";
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


const EditUserInfo = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  let user = location.state.user;
  console.log(location.state.user);

  const [id, setId] = useState(user.id);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const editInfo = () => {
    axios.put("http://localhost:3005/api/updateUser", {
      username: username,
      name: name,
      role: role,
      id:id
    })
    .then((response) => {
      if(response){
        history.push('/userManage');
      }
    })
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
          <TextField disabled id="outlined-basic" label="Username" variant="outlined" className={classes.textField} 
          onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}/>
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Username" variant="outlined" className={classes.textField} 
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}/>
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textField}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}/>
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Role" variant="outlined" className={classes.textField}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}/>
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
