import DeveloperProfile from "../Components/Developer/DeveloperProfile";
import { connect } from "react-redux";
import {
  invitedByProject,
  invitesById,
  inviteResponse,
  deleteDeveloperInvite
} from "../Actions/DeveloperProfile";
import { getNotifications, deleteNotification } from "../Actions/AdminProfile";
const mapDispatchToProps = dispatch => {
  return {
    InvitedByProject: id => dispatch(invitedByProject(id)),
    InvitesById: id => dispatch(invitesById(id)),
    InviteResponse: user => dispatch(inviteResponse(user)),
    DeleteDeveloperInvite: userValue =>
      dispatch(deleteDeveloperInvite(userValue)),
    GetNotifications: Id => dispatch(getNotifications(Id))
  };
};
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Projects: state.InvitedDeveloper,
    InviteFor: state.Projects,
    Noty: state.Notifications
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperProfile);
