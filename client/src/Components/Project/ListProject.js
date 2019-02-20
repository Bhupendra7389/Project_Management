import React, { Component } from "react";
import { connect } from "react-redux";

class ListProject extends Component {
  componentWillMount() {
    this.props.ListProject();
  }

  render() {
    console.log(this.props.getListProject);

    return (
      <div>
        <div className="container -fluid">
          <h1>Project List</h1>

          {this.props.getListProject.map(post => (
            <ul className="lighten-3 m-2">
              <div className="p-3 border border-primary">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col p-1 border border-danger">
                      <label>Project title</label>
                      <div>
                        <p>{post.Project_Name}</p>
                      </div>
                    </div>

                    <div className="col p-1 border border-danger">
                      <label>Project Start</label>
                      <p>
                        <div>{post.Start_Date}</div>
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-start ">
                    <div className="col p-1 border border-danger">
                      <label>Project Submit</label>
                      <div>
                        <p>{post.Submission_Date}</p>
                      </div>
                    </div>

                    <br />
                    <div className="col p-1 border border-danger">
                      <label>Project Details</label>
                      <div>
                        <p>{post.Project_Discription}</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-danger sm">DELETE</button>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ListProject: () => dispatch({ type: "LISTPROJECT" })
  };
};
const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProject);
