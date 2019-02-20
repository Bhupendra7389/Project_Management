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
            <div class="nav">
              <li className="nav item">
                <Link to="/AddTask" className="nav-link active">
                  Add-Task
                </Link>
              </li>
              <li className="nav item">
                <Link to="/Projects" className="nav-link active">
                  Projects
                </Link>
              </li>
            </div>
          </nav>
          <h3>Profile</h3>
          <p>Name:-{this.props.Token.user.Name}</p>
          <p>Profession:-{this.props.Token.user.Position}</p>
          <p>Id:-{this.props.Token.user._id}</p>
        </div>
      );
    }
    return (
      <div>
        <h1>UnAuthorized</h1>
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
