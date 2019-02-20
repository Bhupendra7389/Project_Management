import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <nav className="nav bg-light">
          <li className="nav-item">
            <Link to="/AddTask" className="nav-link active">
              Add-Task
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className="nav-link active">
              Add-Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ProjectList" className="nav-link active">
              All-Projects
            </Link>
          </li>
        </nav>
        <h1>Project Details</h1>
      </div>
    );
  }
}

export default ProjectDetails;
