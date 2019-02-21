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
    if (this.props.Token.user) {
      return (
        <div>
          <nav className="navbar  navbar-light bg-light">
            <div className="nav">
              <li className="nav item">
                <Link to="/AdminProfile" className="nav-link active">
                  Profile
                </Link>
              </li>
              <li className="nav item">
                <Link to="/AddTask" className="nav-link active">
                  Add-Task
                </Link>
              </li>
              <li className="nav item">
                <Link to="/Projects" className="nav-link active">
                  Add-Projects
                </Link>
              </li>
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
              <p>Name:-{this.props.Token.user.Name}</p>
            </div>
            <div className="col">
              <p>Profession:-{this.props.Token.user.Position}</p>
            </div>
            <div className="col">
              <p>Id:-{this.props.Token.user._id}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Session Out</h1>
        <Link className="btn btn-danger" to="/AdminLog">
          Log-In
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Token: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminProfile);
