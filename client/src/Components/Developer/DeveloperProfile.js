import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
class DeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Id: ""
    };
  }
  showNotification = user => {
    new Noty({
      theme: "bootstrap-v4",
      type: user.type,
      layout: "topRight",
      text: user.data,
      timeout: 1000
    }).show();
  };

  handleResponse = async e => {
    const User = {
      ProjectId: e.target.value,
      DeveloperId: this.state.Id,
      DeveloperEmail: localStorage.getItem("Email")
    };
    await this.props.InviteResponse(User);
    await this.props.DeleteDeveloperInvite(User);
    await this.props.InvitedByProject(localStorage.getItem("_id"));
    await this.setState({ subModelShow: false });
  };
  closeSubModal = () => {
    this.setState({ subModelShow: false });
  };
  handleClose = () => {
    this.setState({ Show: false, subModelShow: false, show: false });
  };
  handleShow = () => {
    this.setState({ Show: true });
  };
  handleLogout = () => {
    localStorage.clear();
    this.showNotification({
      data: "Logged-Out Successful",
      type: "success"
    });
    this.props.history.push("/DeveloperLog");
  };
  deleteNotification = async e => {
    const Ids = {
      UserId: localStorage.getItem("_id"),
      NotificationId: e.target.value
    };
    await this.props.DeleteNotification(Ids);
    await this.props.GetNotifications(localStorage.getItem("_id"));
  };
  handleNotifications = () => {
    this.setState({
      show: true
    });
  };
  showTaskDetail = e => {
    this.setState({ showDetail: true });
    this.props.ShowTaskDetail(e.target.value);
  };

  componentDidMount = async () => {
    await this.props.InvitedByProject(localStorage.getItem("_id"));
    await this.props.GetNotifications(localStorage.getItem("_id"));
  };
  handleInvites = e => {
    this.setState({ subModelShow: true, Id: e.target.id });
    this.props.InvitesById(e.target.value);
  };
  handleCloseTaskDetail = () => {
    this.setState({ showDetail: false });
  };

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      return (
        <div className="container bgprofile">
          {this.props.Noty.Notifications ? (
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              aria-labelledby="contained-modal-title-vcenter"
            >
              <div className="bg">
                <button
                  className="close mr-3 mt-2 "
                  aria-label="Close"
                  onClick={this.handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="mt-5">
                  {this.props.Noty.Notifications.map(Post => (
                    <div key={Post._id}>
                      <p className="alert alert-info">
                        <b>Task-Id:-{Post.Task_Name}</b>
                        <br />
                        <b>{Post.Notification}</b>
                        <br />
                        <button
                          onClick={this.showTaskDetail}
                          value={Post.Task_Name}
                          className="ml-5 badge btn-badge"
                        >
                          SHOWDETAILS
                        </button>
                        <button
                          onClick={this.deleteNotification}
                          value={Post._id}
                          className="ml-5 badge btn-badge"
                        >
                          Done
                        </button>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          ) : null}
          <Modal
            show={this.state.showDetail}
            onHide={this.handleCloseTaskDetail}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <div className="bg">
              <button
                className="close mr-3 mt-2"
                aria-label="Close"
                onClick={this.handleCloseTaskDetail}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {this.props.TaskDetail.map(Detail => (
                <div key={Detail._id} className="ml-3 mt-2 mb-2 ">
                  Title:-<b>{Detail.Task_Name}</b>
                  <br />
                  Start-Date:-<b>{Detail.Start_Date}</b>
                  <br />
                  Submission-Date:-<b>{Detail.Submission_Date}</b>
                  <br />
                  Task-Details:-<b>{Detail.Task_Discription}</b>
                </div>
              ))}
            </div>
          </Modal>
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <Link
                  to="/DeveloperProfile"
                  className="nav-link active btn-primary"
                >
                  Profile
                </Link>
              </li>

              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <Link to="/ProjectList" className="nav-link active btn-primary">
                  Projects
                </Link>
              </li>

              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <button
                  onClick={this.handleLogout}
                  className="nav-link active btn-primary"
                >
                  Log-Out
                </button>
              </li>

              <button
                onClick={this.handleNotifications}
                className="ml-2 nav-link active btn-primary"
              >
                <span className="badge badge-danger badge-pill">
                  {this.props.Noty.Notifications
                    ? this.props.Noty.Notifications.length
                    : null}
                </span>
              </button>
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
              <Modal
                show={this.state.subModelShow}
                onHide={this.handleClose}
                size="sm"
              >
                <div className="bg">
                  {this.props.InviteFor.map(invite => (
                    <ul key={invite._id}>
                      <button
                        className="close mr-3 mt-2"
                        aria-label="Close"
                        onClick={this.closeSubModal}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div>
                        {invite.Project_Name}
                        <br />
                        {invite.Start_Date}
                        <br />
                        {invite.Submission_Date}
                        <br />
                        {invite.Project_Discription}
                        <br />
                        <button
                          className="badge btn-primary"
                          value={invite._id}
                          onClick={this.handleResponse}
                        >
                          ACCEPT
                        </button>
                      </div>
                    </ul>
                  ))}
                </div>
              </Modal>
              <Modal size="lg" show={this.state.Show} onHide={this.handleClose}>
                <div className="bg">
                  <button
                    className="close mr-3 mt-2"
                    aria-label="Close"
                    onClick={this.handleClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  {this.props.Projects.length &&
                    this.props.Projects.map(postData => (
                      <ul key={postData._id}>
                        <div className="badge btn-danger">
                          <button
                            value={postData.ProjectId}
                            id={postData.DeveloperId}
                            onClick={this.handleInvites}
                          >
                            ONPROJECT
                          </button>
                          <br />
                        </div>
                      </ul>
                    ))}
                </div>
              </Modal>
              <button className="badge btn-warning" onClick={this.handleShow}>
                Invite's
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/Developerlog" />
      </div>
    );
  }
}
export default DeveloperProfile;
