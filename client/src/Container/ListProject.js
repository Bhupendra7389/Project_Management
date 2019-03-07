import ListProject from "../Components/Project/ListProject";
import { connect } from "react-redux";
import {
  listProject,
  listDeveloper,
  inviteDeveloper,
  addTask,
  projectStatus
} from "../Actions/ListProjectActions";
import { invitesById } from "../Actions/DeveloperProfile";
const mapDispatchToProps = dispatch => {
  return {
    ListProject: () => dispatch(listProject()),
    ListDeveloper: () => dispatch(listDeveloper()),
    InviteDeveloper: Ids => dispatch(inviteDeveloper(Ids)),
    AddTask: Value => dispatch(addTask(Value)),
    ProjectStatus: ProjectStatus => dispatch(projectStatus(ProjectStatus)),
    InvitesById: id => dispatch(invitesById(id))
  };
};
const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList,
    getListDeveloper: state.ListDeveloper,
    getProject: state.Projects
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProject);
