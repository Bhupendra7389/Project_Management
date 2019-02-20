import DeveloperRegistration from "../Components/Developer/DeveloperRegistration";
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
