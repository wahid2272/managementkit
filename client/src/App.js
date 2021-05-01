import React from "react";
import Home from "./components/home/Home";
import Main from "./token/Main";
import UserManager from './components/users/userDashboard/UserManager';
import WebsiteManager from './components/users/websiteDashboard/WebsiteManager';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Reset from "./components/resetPassword/Reset";
import Footer from "./components/footer/Footer";

//Material ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <CssBaseline />
          <div className="appBody">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/dashboard" exact render={() => <Main/>} />
              <Route path="/userManage" exact render={() => <UserManager/>} />
              <Route path="/websiteManage" exact render={() => <WebsiteManager/>} />
              <Route exact path="/reset" render={() => <Reset/>} />
            </Switch>
          </div>
        </>
      </Router>
      <Footer />
    </>
  );
}

export default App;
