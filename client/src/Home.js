import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Noty from "noty";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/bootstrap-v4.css";
import "./bootstrap.css";
import "./App.css";

class Home extends Component {
  showNotification = user => {
    new Noty({
      theme: "bootstrap-v4",
      type: user.type,
      layout: "topRight",
      text: user.data,
      timeout: 1000
    }).show();
  };

  render() {
    if (!localStorage.getItem("Token")) {
      return (
        <div className="bgprofile">
          <nav className="nav justify-content-end nav  ">
            <li className="nav justify-content-end nav nav-tabs">
              <Link to="/Developerlog" className="nav-link active btn-primary">
                Log-In
              </Link>
            </li>
            <li className="nav justify-content-end">
              <Link
                to="/DeveloperReg"
                className="ml-3 mr-3 nav-link active btn-primary"
              >
                Register
              </Link>
            </li>
          </nav>
          <center>
            <div className="mt-5 mask rgba-gradient align-items-center container">
              <div className="container px-md-3 px-sm-0">
                <div className="row wow fadeIn">
                  <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
                    <h1 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                      Project Management
                    </h1>
                    <hr className="hr-light my-4 w-75" />
                    <h5 className="subtext-header mt-2 mb-4">
                      Learn About the Project Management System.
                    </h5>
                    <a
                      href="/DeveloperLog"
                      className="btn btn-rounded btn-outline-white"
                    >
                      <i className="fas fa-home"> VISIT-US</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      );
    } else if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      this.showNotification({
        data: "Already Logged-In",
        type: "success"
      });

      return <Redirect to="DeveloperProfile" />;
    } else if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Admin"
    ) {
      this.showNotification({
        data: "Already Logged-In",
        type: "success"
      });
      return <Redirect to="AdminProfile" />;
    } else {
      return null;
    }
  }
}

export default Home;
