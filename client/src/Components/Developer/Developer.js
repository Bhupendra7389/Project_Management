import React, { Component } from "react";
import { Link } from "react-router-dom";

class Developer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-light bg-light">
          <div class="navbar-nav">
            <Link to="/DeveloperReg">Developer-Reg</Link>
            <br />
            <Link to="/DeveloperLog">Devlop-LogIn</Link>
          </div>
        </nav>
        <h1>Welcome Developer</h1>
      </div>
    );
  }
}

export default Developer;
