import AdminProfile from "../Components/Admin/AdminProfile";
import { connect } from "react-redux";
import {
  getNotifications,
  deleteNotification,
  changeInNotification
} from "../Actions/AdminProfile";
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Noty: state.Notifications
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetNotifications: () => dispatch(getNotifications()),
    DeleteNotification: Id => dispatch(deleteNotification(Id)),
    ChangeInNotification: Id => dispatch(changeInNotification(Id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProfile);
