import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../../App";
import UserNav from "../../UserNav";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  button: {
    width: "10em",
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

const WebsiteManager = () => {
  const classes = useStyles();
  const history = useHistory();

  const [studyInfo, setStudyInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/getAllStudyInfo`)
      .then((response) => setStudyInfo(response.data));
  }, []);

  const handleChange = () => {
    history.push("/dashboard");
  };

  const handleEdit = (e) => {
    let arrayIndex = e.currentTarget.getAttribute('info-id');
    let info = studyInfo[arrayIndex];
    history.push({
      pathname: "/editStudyInfo",
      state: {info: info}
    });
  };

  const createNew = () => {
    history.push("/createNewInfo");
  };

  return (
    <>
      <UserNav />
      <div className="center">
        <h1>Study Info</h1>

        <div className={classes.control}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <caption>Study related info</caption>
              <TableHead>
                <TableRow>
                  <TableCell>Program Name</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">End Date</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studyInfo.map((info, index) => (
                  <TableRow key={info.id}>
                    <TableCell component="th" scope="row">
                      {info.program}
                    </TableCell>
                    <TableCell align="right">
                      {moment.utc(info.start_date).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      {moment.utc(info.end_date).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="right">€ {info.price}</TableCell>
                    <TableCell align="right">
                      <Button
                        info-id={index}
                        variant="outlined"
                        className={classes.editButtonText}
                        onClick={handleEdit}
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
            onClick={createNew}
          >
            Create new
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebsiteManager;
