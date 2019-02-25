import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ""
    };
  }

  render() {
    if (localStorage.getItem("Name")) {
      return (
        <div className="container">
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav item">
                <Link to="/DeveloperProfile" className="nav-link active">
                  Profile
                </Link>
              </li>
              ...
              <li className="nav item">
                <Link to="/AddTask" className="nav-link active">
                  Add-Task
                </Link>
              </li>
              ...
              <li className="nav item">
                <Link to="/TaskList" className="nav-link active">
                  Task
                </Link>
              </li>
            </div>
          </nav>
          <h3>Profile</h3>
          <div className="row">
            <div className="col">
              <p>Name:-{localStorage.getItem("Name")}</p>
            </div>
            <div className="col">
              <p>Profession:-{localStorage.getItem("Position")}</p>
            </div>
            <div className="row">
              <div className="col">
                <p>Id:-{localStorage.getItem("_id")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>E-mail:-{localStorage.getItem("Email")}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <h1>Session Out</h1>
        </div>
        <Link className="btn btn-danger" to="/DeveloperLog">
          Log-In
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminProfile);
