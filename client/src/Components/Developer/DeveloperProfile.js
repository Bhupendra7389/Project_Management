import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

class DeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ""
    };
  }
  closeSubModal = () => {
    this.setState({ subModelShow: false });
  };
  handleClose = () => {
    this.setState({ Show: false, subModelShow: false });
  };
  handleShow = () => {
    this.setState({ Show: true });
  };
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/DeveloperLog");
  };
  componentWillMount = () => {
    this.props.InvitedByProject(localStorage.getItem("_id"));
  };
  handleInvites = e => {
    this.setState({ subModelShow: true });
    this.props.InvitesById(e.target.value);
  };

  render() {
    // console.log(this.props.Projects.length && this.props.Projects[0].ProjectId);
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
              <p>Name:-{localStorage.getItem("Name")}</p>
            </div>
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
              <p>E-mail:-{localStorage.getItem("Email")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Invited By</p>
              <Modal
                show={this.state.subModelShow}
                onHide={this.handleClose}
                size="sm"
              >
                {this.props.InviteFor.map(invite => (
                  <ul key={invite._id}>
                    <div>
                      {invite.Project_Name}
                      <br />
                      {invite.Start_Date}
                      <br />
                      {invite.Submission_Date}
                      <br />
                      {invite.Project_Discription}
                      <br />
                      <button onClick={this.closeSubModal}>CLOSE</button>
                    </div>
                  </ul>
                ))}
              </Modal>
              <Modal size="lg" show={this.state.Show} onHide={this.handleClose}>
                {this.props.Projects.length &&
                  this.props.Projects.map(postData => (
                    <ul key={postData._id}>
                      <div>
                        <button
                          value={postData.ProjectId}
                          onClick={this.handleInvites}
                        >
                          ONPROJECT
                        </button>
                        <br />
                      </div>
                    </ul>
                  ))}
                <button className="badge-primary" onClick={this.handleClose}>
                  CLOSE
                </button>
              </Modal>
              <button onClick={this.handleShow}>Invite's</button>
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
const mapDispatchToProps = dispatch => {
  return {
    InvitedByProject: id => dispatch({ type: "INVITEDBYPROJECT", id }),
    InvitesById: id => dispatch({ type: "INVITESBYID", id })
  };
};
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Projects: state.InvitedDeveloper,
    InviteFor: state.Projects
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperProfile);
