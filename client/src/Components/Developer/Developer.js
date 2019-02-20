import React, { Component } from "react";
import { Link } from "react-router-dom";

class Developer extends Component {
  render() {
    return (
      <div>
        <nav className="nav bg-light">
          <li className="nav-item">
            <Link to="/DeveloperReg" className="nav-link active">
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DeveloperLog" className="nav-link active">
              Login
            </Link>
          </li>
        </nav>
        <h1>Welcome Developer</h1>
      </div>
    );
  }
}

export default Developer;
