import React from "react";
import Home from "./components/home/Home";
import Main from "./token/Main";
import UserManager from './components/users/userDashboard/UserManager';
import EditUserInfo from './components/users/userDashboard/EditUserInfo';
import WebsiteManager from './components/users/adminUser/adminWebsiteDashboard/WebsiteManager';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Reset from "./components/resetPassword/Reset";
import EditInfo from "./components/users/adminUser/adminWebsiteDashboard/EditStudyInfo";
import MoreInfo from "./components/users/adminUser/adminWebsiteDashboard/MoreInfo"
import CreateNewInfo from "./components/users/adminUser/adminWebsiteDashboard/CreateNewInfo";
import StudyInfo from "./components/users/studentUser/StudyInfo";
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
              <Route exact path="/editStudyInfo" render={() => <EditInfo/>} />
              <Route exact path="/websiteManage/moreInfo" render={() => <MoreInfo/>} />
              <Route exact path="/createNewInfo" render={() => <CreateNewInfo/>} />
              <Route exact path="/studyInfo" render={() => <StudyInfo/>} />
              <Route exact path="/editUserInfo" render={() => <EditUserInfo/>} />
            </Switch>
          </div>
        </>
      </Router>
      <Footer />
    </>
  );
}

export default App;
