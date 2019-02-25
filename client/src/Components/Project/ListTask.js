import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

class ListTask extends Component {
  constructor() {
    super();
    this.state = {
      Show_Button: true,
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: "",
      Id: ""
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const data = {};
  //   if (this.state.testName !== "") {
  //     data.testName = this.state.testName;
  //   }
  //   if (this.state.description !== "") {
  //     data.description = this.state.description;
  //   }
  //   if (data.description || data.testName) {
  //     const id = this.props.test._id;
  //     this.props.editTest(id, data);
  //     this.editMode();
  //   } else {
  //     this.editMode();
  //   }
  //   this.setState({ testName: "", description: "" });
  // };
  handleEdit = () => {
    var formData = {
      Task_Name: this.state.Task_Name,
      Start_Date: this.state.Start_Date,
      Submission_Date: this.state.Submission_Date,
      Total_Developers: this.state.Total_Developers,
      Task_Discription: this.state.Task_Discription,
      Id: this.state.Id
    };

    this.props.EditTask(formData);
    this.setState({
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: ""
    });
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true, Show_Button: true });
  };
  handleShowButton = e => {
    this.setState({ show: true, Show_Button: false, Id: e.target.value });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleTaskDelete = e => {
    this.props.DeleteTask(e.target.value);
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
    this.setState({ show: false });
  };

  componentWillMount() {
    this.props.ListTask();
  }

  render() {
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
            <li className="nav-item">
              <Link to="/AdminProfile" className="nav-link active">
                Profile
              </Link>
            </li>
          )}
        </nav>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div>
            <nav className="nav bg-light" />
            <div className="container">
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

                    {this.state.Show_Button ? (
                      <button
                        className="btn btn-primary "
                        onClick={this.handleClick}
                      >
                        SUBMIT
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary "
                        onClick={this.handleEdit}
                      >
                        UPDATE
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-lg" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.showEdit}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div>
            <nav className="nav bg-light" />
            <div className="container">
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
                      className="badge-success "
                      onClick={this.handleEdit}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
                <div className="col-lg" />
              </div>
            </div>
          </div>
        </Modal>
        <div className="container -fluid">
          <h1>Task List</h1>

          {this.props.getListTask.map(post => (
            <ul key={post._id}>
              <ul className="lighten-3 m-2">
                <div className="p-3 border border-primary">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Task title</label>
                        <div>
                          <p>
                            <b>{post.Task_Name}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Task Start</label>
                        <div>
                          <b>{post.Start_Date}</b>
                        </div>
                      </div>

                      <hr />

                      <div className="col p-1 border border-danger">
                        <label>Task Submit</label>
                        <div>
                          <p>
                            <b>{post.Submission_Date}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Task Details</label>
                        <div>
                          <p>
                            <b>{post.Task_Discription}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Task Assigned To</label>
                        <div>
                          <p>
                            <b>{post.Total_Developers}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <Button className="badge-success" onClick={this.handleShow}>
                      ADDTASK
                    </Button>
                    .....
                    <Button
                      variant="badge-warning"
                      onClick={this.handleShowButton}
                      value={post._id}
                    >
                      UPDATE
                    </Button>
                    .....
                    <Button
                      variant="btn btn-danger"
                      onClick={this.handleTaskDelete}
                      value={post._id}
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </ul>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ListTask: () => dispatch({ type: "LISTTASK" }),
    AddTask: task => dispatch({ type: "ADDTASK", task }),
    EditTask: editTask => dispatch({ type: "EDITTASK", editTask }),
    DeleteTask: id => dispatch({ type: "DELETETASK", id })
  };
};
const mapStateToProps = state => {
  return {
    getListTask: state.TaskList
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);
