import { connect } from "react-redux";
import Projects from "../Components/Project/Projects";
const mapDispatchToProps = dispatch => {
  return {
    AddProject: project => dispatch({ type: "ADDPROJECT", project })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Projects);
