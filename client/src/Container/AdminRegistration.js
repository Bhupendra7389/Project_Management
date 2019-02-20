import AdminRegistration from "../Components/Admin/AdminRegistration";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    AdminRegistration: admin => dispatch({ type: "ADMINREGISTRATION", admin })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdminRegistration);
