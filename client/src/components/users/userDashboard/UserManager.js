import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserNav from "../UserNav";
import "../../../App.css";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  control: {
    textAlign: "center",
    fontSize: "2em",
  },
  heading: {
    textAlign: "center",
    color: "green",
    fontSize: "3em",
  },
  button: {
    width: "9em",
    padding: "22px",
    margin: theme.spacing(0.5),
  },
  table: {
    minWidth: 850,
  },
  editButtonText: {
    textTransform: "none",
    width: "4em",
  },
  deleteButtonText: {
    textTransform: "none",
    width: "5em",
  },
}));

const AdminUserManager = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/getAllUser`)
      .then((response) => setUsers(response.data));
  }, []);

  const handleChange = () => {
    history.push("/dashboard");
  };

  const editUserInfo = (e) => {
    let arrayIndex = e.currentTarget.getAttribute('data-id');
    //console.log(e.currentTarget.getAttribute('data-id'));
    let user = users[arrayIndex];
    //console.log(user);
    history.push({
      pathname: "/editUserInfo",
      state: {user: user}
    }); 
  };

  return (
    <div>
      <UserNav />
      <div className="center">
        <h1 className={classes.heading}>Manage Users</h1>

        <div className={classes.control}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <caption>User Info </caption>
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">User role</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell align="right"> {user.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right"> {user.username}</TableCell>
                    <TableCell align="right">{user.role}</TableCell>
                    <TableCell align="right">
                      <Button
                        data-id={index}
                        variant="outlined"
                        className={classes.deleteButtonText}
                        onClick={editUserInfo}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        className={classes.deleteButtonText}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleChange}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManager;
