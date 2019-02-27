import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    var formData = {
      Task_Name: this.state.Task_Name,
      Start_Date: this.state.Start_Date,
      Submission_Date: this.state.Submission_Date,
      Total_Developers: this.state.Total_Developers,
      Task_Discription: this.state.Task_Discription
    };
    this.props.AddTask(formData);
    this.setState({
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: ""
    });
    if (localStorage.getItem("Position") === "Developer") {
      this.props.history.push("/DeveloperProfile");
    } else {
      this.props.history.push("/AdminProfile");
    }
  };
  render() {
    if (
      localStorage.getItem("Token") !== "undefined" &&
      localStorage.getItem("Token")
    ) {
      return (
        <div>
          <nav className="nav bg-light">
            {localStorage.getItem("Position") === "Developer" ? (
              <li className="nav-item">
                <Link to="/DeveloperProfile" className="nav-link active">
                  Profile
                </Link>
              </li>
            ) : (
              <Link to="/AdminProfile" className="nav-link active">
                Profile
              </Link>
            )}
          </nav>
          <div>
            <div className="row">
              <div className="col-lg" />
              <div className="col-lg m-5 p-5">
                <div className="form-group shadow-textarea">
                  <h4>Task Details</h4>
                  <input
                    type="text"
                    name="Task_Name"
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="Title..."
                    value={this.state.Task_Name}
                  />
                  <br />
                  <input
                    type="date"
                    name="Start_Date"
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="../../...."
                    value={this.state.Start_Date}
                  />
                  <br />
                  <input
                    type="date"
                    name="Submission_Date"
                    onChange={this.onChange}
                    className="form-control"
                    placeholder="../../...."
                    value={this.state.Submission_Date}
                  />
                  <br />
                  <textarea
                    className="form-control"
                    type="text"
                    name="Total_Developers"
                    onChange={this.onChange}
                    placeholder="Task Assign To"
                    value={this.state.Total_Developers}
                  />
                  <br />
                  <textarea
                    className="form-control"
                    type="text"
                    name="Task_Discription"
                    onChange={this.onChange}
                    placeholder="Task_Discription"
                    value={this.state.Task_Discription}
                  />
                  <br />

                  <button
                    className="btn btn-primary "
                    onClick={this.handleClick}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="col-lg" />
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="DeveloperLog" />;
    }
  }
}
export default Task;
