import AdminProfile from "../Components/Admin/AdminProfile";
import { connect } from "react-redux";
import { getNotifications } from "../Actions/AdminProfile";
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetNotifications: () => dispatch(getNotifications())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProfile);
