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
        <div className="container">
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav item">
                <Link to="/DeveloperProfile" className="nav-link active">
                  Profile
                </Link>
              </li>
              <li className="nav item">
                <Link to="/AddTask" className="nav-link active">
                  Add-Task
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
