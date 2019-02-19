import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-light bg-light">
          <div class="navbar-nav">
            <Link to="/AddTask">Add-Task</Link>
            <br />
            <Link to="/Projects">Projects</Link>
          </div>
        </nav>
        <h1>Project Details</h1>
      </div>
    );
  }
}

export default ProjectDetails;
