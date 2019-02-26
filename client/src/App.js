import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import DeveloperLogin from "./Components/Developer/Login";
import DeveloperRegistration from "./Container/DeveloperRegistration";
import Projects from "./Components/Project/Projects";
import Home from "./Home";
import "./bootstrap.css";
import AddTask from "./Components/Project/Task";
import AdminProfile from "./Components/Admin/AdminProfile";
import ListProject from "./Components/Project/ListProject";
import DeveloperProfile from "./Components/Developer/DeveloperProfile";
import ListTask from "./Components/Project/ListTask";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="nav bg-dark">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ProjectList" className="nav-link active">
                Projects
              </Link>
            </li>
          </nav>
          <Switch>
            <Route path="/DeveloperProfile" component={DeveloperProfile} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Home" component={Home} />
            <Route path="/DeveloperReg" component={DeveloperRegistration} />
            <Route path="/DeveloperLog" component={DeveloperLogin} />
            <Route path="/AddTask" component={AddTask} />
            <Route path="/AdminProfile" component={AdminProfile} />
            <Route path="/ProjectList" component={ListProject} />
            <Route path="/TaskList" component={ListTask} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
