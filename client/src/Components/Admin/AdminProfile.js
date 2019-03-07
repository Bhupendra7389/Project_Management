import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
import { Modal } from "react-bootstrap";

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
  handleNotifications = () => {
    this.setState({
      show: true
    });
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

  handleLogout = () => {
    localStorage.clear();
    this.showNotification({
      data: "Logged-Out Successful",
      type: "success"
    });
    this.props.history.push("/DeveloperLog");
  };
  componentDidMount = () => {
    this.props.GetNotifications();
  };

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Admin"
    ) {
      return (
        <div className="container">
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <h1>Hello</h1>
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

              <nav className="ml-3 navbar navbar-light nav nav-tabs">
                <a
                  className="navbar-brand"
                  onClick={this.handleNotifications}
                  href="#"
                >
                  <img
                    // src="/docs/4.0/assets/brand/bootstrap-solid.svg"
                    width="30"
                    height="30"
                    className=" d-inline-block align-top"
                    alt=""
                  />
                  Notifiactions
                </a>
              </nav>
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
