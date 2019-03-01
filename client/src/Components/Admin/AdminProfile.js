import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ""
    };
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/DeveloperLog");
  };

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Admin"
    ) {
      return (
        <div className="container">
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav item">
                <Link to="/AdminProfile" className="nav-link active">
                  Profile
                </Link>
              </li>
              ...
              <li className="nav item">
                <Link to="/Projects" className="nav-link active">
                  Add-Projects
                </Link>
              </li>
              ...
              <li className="nav item">
                <Link to="/ProjectList" className="nav-link active">
                  Projects
                </Link>
              </li>
              ...
              <li className="nav item">
                <button onClick={this.handleLogout} className="nav-link active">
                  Log-Out
                </button>
              </li>
            </div>
          </nav>
          <h3>Profile</h3>
          <div className="row">
            <div className="col">
              <h1>{localStorage.getItem("Name")}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Profession:-{localStorage.getItem("Position")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Id:-{localStorage.getItem("_id")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Email-Id:-{localStorage.getItem("Email")}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/DeveloperLog" />
        </div>
      );
    }
  }
}

export default AdminProfile;
