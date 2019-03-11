import AdminProfile from "../Components/Admin/AdminProfile";
import { connect } from "react-redux";
import { getNotifications, deleteNotification } from "../Actions/AdminProfile";
import { getTaskById } from "../Actions/ListTask";
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Noty: state.Notifications,
    TaskDetail: state.Task
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetNotifications: Id => dispatch(getNotifications(Id)),
    DeleteNotification: Ids => dispatch(deleteNotification(Ids)),
    ShowTaskDetail: Id => dispatch(getTaskById(Id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProfile);
