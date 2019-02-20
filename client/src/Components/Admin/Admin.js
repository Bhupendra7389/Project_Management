import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div>
        <nav className="nav bg-light">
          <li className="nav-item">
            <Link to="/AdminReg" className="nav-link active">
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminLog" className="nav-link active">
              LogIn
            </Link>
          </li>
        </nav>
        <h1>Welcome Admin</h1>
      </div>
    );
  }
}

export default Admin;
