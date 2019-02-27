import ListProject from "../Components/Project/ListProject";
import { connect } from "react-redux";
import {
  listProject,
  listDeveloper,
  inviteDeveloper
} from "../Actions/ListProjectActions";
const mapDispatchToProps = dispatch => {
  return {
    ListProject: () => dispatch(listProject()),
    ListDeveloper: () => dispatch(listDeveloper()),
    InviteDeveloper: Ids => dispatch(inviteDeveloper(Ids))
  };
};
const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList,
    getListDeveloper: state.ListDeveloper
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProject);
