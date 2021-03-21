import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Main from "./token/Main";
import AdminUserManager from './components/users/userManager/AdminUserManager';

function App() {
  return (
    <>
      <Router>
        <>
          <CssBaseline />
          <div className="appBody">
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/dashboard" exact render={() => <Main/>} />
              <Route path="/userManage" exact render={() => <AdminUserManager/>} />
            </Switch>
          </div>
        </>
      </Router>
      <Footer />
    </>
  );
}

export default App;
