import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textTransform: 'none',
    fontSize: 'larger'
  }
}));

export default function UserNav() {
  const classes = useStyles();

  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" className={classes.button}>
              Student Portal
          </Button>
          </Typography>
          <Button color="inherit" onClick={logOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
