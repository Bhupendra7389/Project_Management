import React, { Component } from "react";

import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import AdminRegistration from "./Container/AdminRegistration";
import AdminLogin from "./Container/AdminLogin";
import DeveloperLogin from "./Components/Developer/DeveloperLogin";
import DeveloperRegistration from "./Container/DeveloperRegistration";
import Admin from "./Components/Admin/Admin";
import Developer from "./Components/Developer/Developer";
import Projects from "./Components/Project/Projects";
import Home from "./Home";
import "./bootstrap.css";
import ProjectDetails from "./Components/Project/ProjectDetails";
import AddTask from "./Components/Project/AddTask";
import AdminProfile from "./Components/Admin/AdminProfile";
import ListProject from "./Components/Project/ListProject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="nav bg-dark">
            <li class="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Admin" className="nav-link active">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Developer" className="nav-link active">
                Developer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ProjectDetails" className="nav-link active">
                Projects
              </Link>
            </li>
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
            <Route path="/AdminProfile" component={AdminProfile} />
            <Route path="/ProjectList" component={ListProject} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
