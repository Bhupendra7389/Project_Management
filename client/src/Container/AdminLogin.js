import AdminLogin from "../Components/Admin/AdminLogin";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    AdminLogin: admin => dispatch({ type: "ADMINLOGIN", admin })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AdminLogin);
