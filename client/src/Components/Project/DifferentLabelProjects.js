import React, { Component } from "react";

class DifferentLabelProjects extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    // this.props.ProjectList();
  };
  render() {
    return (
      <div className="p-3  alert alert-danger">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col p-1 alert alert-success">
              <label>Project title</label>
              <div>
                <p>{/* <b>{post.Project_Name}</b> */}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col p-1 alert alert-info">
              <label>Project Start</label>
              <div>{/* <b>{post.Start_Date}</b> */}</div>
            </div>
            <hr />
            <div className="col ml-5 p-1 alert alert-info">
              <label>Project Submit</label>
              <div>
                <p>{/* <b>{post.Submission_Date}</b> */}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col p-1 alert alert-info">
              <label>Project Id</label>
              <div>
                <p>{/* <b>{post._id}</b> */}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col p-1 alert alert-info">
              <label>Project Details</label>
              <div>
                <p>{/* <b>{post.Project_Discription}</b> */}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DifferentLabelProjects;
