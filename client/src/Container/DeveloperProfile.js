import DeveloperProfile from "../Components/Developer/DeveloperProfile";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    InvitedByProject: id => dispatch({ type: "INVITEDBYPROJECT", id }),
    InvitesById: id => dispatch({ type: "INVITESBYID", id }),
    InviteResponse: user => dispatch({ type: "INVITERESPONSE", user })
  };
};
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Projects: state.InvitedDeveloper,
    InviteFor: state.Projects
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperProfile);
