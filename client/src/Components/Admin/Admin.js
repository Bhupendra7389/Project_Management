import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-light bg-light">
          <div class="navbar-nav">
            <Link to="/AdminReg">AdminReg</Link>
            <br />
            <Link to="/AdminLog">Admin-Log-In</Link>
          </div>
        </nav>
        <h1>Welcome Admin</h1>
      </div>
    );
  }
}

export default Admin;
