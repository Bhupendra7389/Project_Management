import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
import { Modal } from "react-bootstrap";
import "../../bootstrap.css";

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ""
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleCloseTaskDetail = () => {
    this.setState({ showDetail: false });
  };
  handleNotifications = () => {
    this.setState({
      show: true
    });
  };
  deleteNotification = async e => {
    const Ids = {
      UserId: localStorage.getItem("_id"),
      NotificationId: e.target.value
    };
    await this.props.DeleteNotification(Ids);
    await this.props.GetNotifications(localStorage.getItem("_id"));
  };
  showNotification = user => {
    new Noty({
      theme: "bootstrap-v4",
      type: user.type,
      layout: "topRight",
      text: user.data,
      timeout: 1000
    }).show();
  };
  showTaskDetail = e => {
    this.setState({ showDetail: true });
    this.props.ShowTaskDetail(e.target.value);
  };
  handleLogout = () => {
    localStorage.clear();
    this.showNotification({
      data: "Logged-Out Successful",
      type: "success"
    });
    this.props.history.push("/DeveloperLog");
  };
  componentDidMount = async () => {
    await this.props.GetNotifications(localStorage.getItem("_id"));
  };

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Admin"
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
                {this.props.Noty.Notifications.map(Post => (
                  <div key={Post._id}>
                    <p className="alert alert-info">
                      <b>Task-Id:-{Post.Task_Name}</b>
                      <br />
                      <b>{Post.Notification}</b>
                      <button
                        onClick={this.deleteNotification}
                        value={Post._id}
                        className="ml-5 badge btn-badge"
                      >
                        DONE
                      </button>
                      <button
                        onClick={this.showTaskDetail}
                        value={Post.Task_Name}
                        className="ml-5 badge btn-badge"
                      >
                        SHOWDETAILS
                      </button>
                    </p>
                  </div>
                ))}
                <button
                  className="ml-3 mb-2 badge btn-danger"
                  onClick={this.handleClose}
                >
                  CLOSE
                </button>
              </div>
            </Modal>
          ) : null}
          <Modal
            show={this.state.showDetail}
            onHide={this.handleCloseTaskDetail}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <div className="bg-warning">
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
            <button
              className="close"
              aria-label="Close"
              onClick={this.handleCloseTaskDetail}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal>
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav justify-content-end nav nav-tabs">
                <Link
                  to="/AdminProfile"
                  className="nav-link active btn-primary"
                >
                  Profile
                </Link>
              </li>
              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <Link to="/Projects" className="nav-link active btn-primary">
                  Add-Projects
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
