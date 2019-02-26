import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

class ListProject extends Component {
  constructor() {
    super();
    this.state = {
      Show: false,
      Project_Id: "",
      Developer_Id: ""
    };
  }
  handleClose = () => {
    this.setState({ Show: false });
  };
  inviteDeveloper = async e => {
    console.log(e.target.value);
    await this.setState({
      Project_Id: e.target.value,
      Show: true
    });
  };
  handleInvite = async e => {
    await this.setState({
      Developer_Id: e.target.value
    });
    const values = {
      ProjectId: this.state.Project_Id,
      DeveloperId: this.state.Developer_Id
    };

    this.props.InviteDeveloper(values);
  };
  componentWillMount() {
    this.props.ListProject();
    this.props.ListDeveloper();
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
                        <label>Project Id</label>
                        <div>
                          <p>
                            <b>{post._id}</b>
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

                <Modal
                  className="container"
                  show={this.state.Show}
                  onHide={this.handleClose}
                >
                  {this.props.getListDeveloper.map(developer => (
                    <div key={developer._id}>
                      <br />
                      <li>
                        Name:{developer.Name}
                        <br />
                        Email:{developer.Email}
                      </li>

                      <button
                        value={developer._id}
                        id={post._id}
                        onClick={this.handleInvite}
                      >
                        Invite
                      </button>
                      <br />
                    </div>
                  ))}
                  <br />
                  <button onClick={this.handleClose} className="badge-primary">
                    Done
                  </button>
                </Modal>

                <div>
                  <button
                    onClick={this.inviteDeveloper}
                    value={post._id}
                    className="badge-success"
                  >
                    Invite Developers
                  </button>
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
    ListProject: () => dispatch({ type: "LISTPROJECT" }),
    ListDeveloper: () => dispatch({ type: "LISTDEVELOPER" }),
    InviteDeveloper: Ids => dispatch({ type: "INVITEDEVELOPER", Ids })
  };
};
const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList,
    getListDeveloper: state.ListDeveloper
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProject);
