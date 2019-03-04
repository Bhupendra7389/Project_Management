import DifferentLabelProjects from "../Components/Project/DifferentLabelProjects";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList
  };
};
export default connect(
  mapStateToProps,
  null
)(DifferentLabelProjects);
