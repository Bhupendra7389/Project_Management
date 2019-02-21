import React, { Component } from "react";
import { connect } from "react-redux";

class ListProject extends Component {
  componentWillMount() {
    this.props.ListProject();
  }

  render() {
    return (
      <div>
        <div className="container -fluid">
          <h1>Project List</h1>

          {this.props.getListProject.map(post => (
            <ul key={post._id}>
              <ul className="lighten-3 m-2">
                <div className="p-3 border border-primary">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Project title</label>
                        <div>
                          <p>
                            <b>{post.Project_Name}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row justify-content-start">
                      <div className="col p-1 border border-danger">
                        <label>Project Start</label>
                        <div>
                          <b>{post.Start_Date}</b>
                        </div>
                      </div>

                      <hr />

                      <div className="col p-1 border border-danger">
                        <label>Project Submit</label>
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
                        <label>Project Details</label>
                        <div>
                          <p>
                            <b>{post.Project_Discription}</b>
                          </p>
                        </div>
                      </div>
                    </div>
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
