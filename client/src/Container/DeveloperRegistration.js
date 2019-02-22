import DeveloperRegistration from "../Components/Developer/Registration";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    DeveloperRegistration: developer =>
      dispatch({
        type: "DEVELOPERREGISTRATION",
        developer
      })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(DeveloperRegistration);
