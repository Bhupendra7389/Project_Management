import React, { Component } from "react";
import { connect } from "react-redux";

class Invite extends Component {
  componentWillMount = () => {};
  render() {
    return (
      <div>
        <h1>Developer</h1>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    InvitedByProject: id => dispatch({ type: "INVITEDBYPROJECT", id })
  };
};
const mapStateToProps = state => {
  return {
    Projects: state.InvitedDeveloper
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Invite);
