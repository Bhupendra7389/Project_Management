import React, { Component } from "react";

import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import AdminRegistration from "./Components/Admin/AdminRegistration";
import AdminLogin from "./Components/Admin/AdminLogin";
import DeveloperLogin from "./Components/Developer/DeveloperLogin";
import DeveloperRegistration from "./Components/Developer/DeveloperRegistration";
import Admin from "./Components/Admin/Admin";
import Developer from "./Components/Developer/Developer";
import Projects from "./Components/Project/Projects";
import Home from "./Home";
import "./bootstrap.css";
import ProjectDetails from "./Components/Project/ProjectDetails";
import AddTask from "./Components/Project/AddTask";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navber-dark bg-dark">
            <Link to="/">Home</Link>
            <Link to="/Admin">Admin</Link>
            <Link to="/Developer">Developer</Link>
            <Link to="/ProjectDetails">Projects</Link>
          </nav>
          <Switch>
            <Route path="/Admin" component={Admin} />
            <Route path="/Developer" component={Developer} />
            <Route path="/Projects" component={Projects} />
            <Route path="/ProjectDetails" component={ProjectDetails} />
            <Route path="/" exact render={Home.render} />
            <Route path="/AdminReg" component={AdminRegistration} />
            <Route path="/AdminLog" component={AdminLogin} />
            <Route path="/DeveloperReg" component={DeveloperRegistration} />
            <Route path="/DeveloperLog" component={DeveloperLogin} />
            <Route path="/AddTask" component={AddTask} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
