import React, { useState } from 'react';
import UserNav from "../../UserNav";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../../../App";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  button: {
    width: "13.5em",
    padding: "22px",
    margin: theme.spacing(0.5)
  },
  // button: {
  //   padding: "20px"
  // },
  table: {
    minWidth: 750,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // width: 300,
  },
}));

const CreateNewInfo = () => {
  const classes = useStyles();
  const history = useHistory();

  const [program, setProgram] = useState("");
  const [startDate, setStatrtDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  const createInfo = () => {
    //console.log(program, startDate, endDate, price);
    axios.post("http://localhost:3005/api/addNewInfo", {
      program: program,
      startDate: startDate,
      endDate: endDate,
      price: price,
    })
    .then((response) => {
      if(response){
        history.push('/websiteManage');
      }
    }, (error) => {
      console.log(error);
    });
  }

  const handleChange = () => {
    history.push('/websiteManage');
  }

  return (
    <div>
      <UserNav/>
      <div className="center">
         <h1>Create New Study Info</h1>
        
        

        

        {/* <div className="button-padding-top">
            <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={createInfo}>Submit</Button>
        </div> */}
      </div>

      <Container className={classes.container} maxWidth="xs">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Program Name"  
                  size="small" 
                  variant="outlined" 
                  onChange={(e) => {
                    setProgram(e.target.value);
                  }}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="date"
                  label="Start Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  onChange={(e) => {
                    setStatrtDate(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="date"
                  label="Start Date"
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
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Price"
                  size="small" 
                  variant="outlined"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Grid>


            </Grid>
          </Grid>
          {/* <Grid item xs={5}>
            <Button className={classes.button} color="primary" fullWidth type="submit" variant="contained" >
              Back
            </Button>
            <Button className={classes.button} color="primary" fullWidth type="submit" variant="contained" >
              Submit
            </Button>
          </Grid> */}
        </Grid>
      </form>
          <div className="button-padding-top">
            <Button className={classes.button} variant="contained" color="primary" onClick={handleChange}>Back</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={createInfo}>Submit</Button>
        </div>
    </Container>

    </div>
  );
};

export default CreateNewInfo;
