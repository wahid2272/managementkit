import Button from "@material-ui/core/Button";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
    minWidth: 750,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  const location = useLocation();

  let info = location.state.info;

  const [id, setId] = useState(info.id);
  const [program, setProgram] = useState(info.program);
  const [startDate, setStatrtDate] = useState(info.startDate);
  const [endDate, setEndDate] = useState(info.endDate);
  const [price, setPrice] = useState(info.price);

  const editInfo = () => {
    axios.put("http://localhost:3005/api/updateStudyInfo", {
      id: id,
      program: program,
      startDate: startDate,
      endDate: endDate,
      price: price,
    });
    history.push("/websiteManage");
  };

  const handleChange = () => {
    history.push("/websiteManage");
  };

  return (
    <div>
      <UserNav />
      <div className="center">
        <h1>Edit Study Info</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-basic"
            label="Program ID"
            variant="outlined"
            className={classes.textField}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Program Name"
            variant="outlined"
            className={classes.textField}
            value={program}
            onChange={(e) => {
              setProgram(e.target.value);
            }}
          />
        </form>

        <form className={classes.root} noValidate>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
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
            className={classes.textField}
            // defaultValue="2021-01-01"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </form>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            className={classes.textField}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
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

export default EditStudyInfo;
