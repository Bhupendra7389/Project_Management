import React, { Component } from "react";
import "../../App.css";

class DifferentLabelProjects extends Component {
  constructor() {
    super();
    this.state = {
      Status: ""
    };
  }
  onDragOver = ev => {
    ev.preventDefault();
  };
  onDragStart = (ev, Id) => {
    ev.dataTransfer.setData("Id", Id);
  };
  onDrop = async (ev, Status) => {
    let id = ev.dataTransfer.getData("Id");
    const projectStatus = {
      ProjectId: id,
      ProjectStatus: Status
    };
    await this.props.ProjectStatus(projectStatus);
    await this.props.ListProject();
  };
  componentDidMount = () => {
    this.props.ListProject();
  };
  render() {
    return (
      <div>
        <div className="container-drag row">
          <br />
          <div
            className="wip col"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e, "In-Processing")}
          >
            <label className="alert alert-success">
              In-Proccessing Projects
            </label>

            {this.props.getListProject.map(post => (
              <div key={post._id}>
                {post.Project_Status === "In-Processing" ? (
                  <div
                    className="col p-1 alert alert-success"
                    draggable
                    onDragStart={e => this.onDragStart(e, post._id)}
                  >
                    <div>{post.Project_Name}</div>
                    <div>{post._id}</div>
                    <div>Start-Date:-{post.Start_Date}</div>
                    <div>Submission-Date:-{post.Submission_Date}</div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="col">
            <div
              className="droppableNew"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "Under-Testing")}
            >
              <label className="alert alert-primary">Under-Testing</label>
              {this.props.getListProject.map(post => (
                <div key={post._id}>
                  {post.Project_Status === "Under-Testing" ? (
                    <div
                      className="col p-1 alert alert-primary"
                      draggable
                      onDragStart={e => this.onDragStart(e, post._id)}
                    >
                      <div>{post.Project_Name}</div>
                      <div>{post._id}</div>
                      <div>Start-Date:-{post.Start_Date}</div>
                      <div>Submission-Date:-{post.Submission_Date}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <div
              className="droppable"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "Complete")}
            >
              <label className="alert alert-warning">Complete-Projects</label>
              {this.props.getListProject.map(post => (
                <div key={post._id}>
                  {post.Project_Status === "Complete" ? (
                    <div
                      className="col p-1 alert alert-warning"
                      draggable
                      onDragStart={e => this.onDragStart(e, post._id)}
                    >
                      <div>{post.Project_Name}</div>
                      <div>{post._id}</div>
                      <div>Start-Date:-{post.Start_Date}</div>
                      <div>Submission-Date:-{post.Submission_Date}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DifferentLabelProjects;
