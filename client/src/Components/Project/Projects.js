import React, { Component } from "react";
import { connect } from "react-redux";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      Project_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Project_Discription: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    var formData = {
      Project_Name: this.state.Project_Name,
      Start_Date: this.state.Start_Date,
      Submission_Date: this.state.Submission_Date,
      Project_Discription: this.state.Project_Discription
    };
    this.props.AddProject(formData);
    this.setState({
      Project_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Project_Discription: ""
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg" />
            <div className="col-lg m-5 p-5">
              <div className="form-group shadow-textarea">
                <h4>Project Details</h4>
                <input
                  type="text"
                  name="Project_Name"
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Title..."
                  value={this.state.Project_Name}
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
                  name="Project_Discription"
                  onChange={this.onChange}
                  placeholder="Project_Discription..."
                  value={this.state.Project_Discription}
                />
                <br />

                <button className="btn btn-primary " onClick={this.handleClick}>
                  SUBMIT
                </button>
              </div>
            </div>
            <div className="col-lg" />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    AddProject: project => dispatch({ type: "ADDPROJECT", project })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Projects);
