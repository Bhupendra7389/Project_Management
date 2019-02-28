import { connect } from "react-redux";
import ListTask from "../Components/Project/ListTask";
import { addTask } from "../Actions/ListProjectActions";
const mapDispatchToProps = dispatch => {
  return {
    ListTask: project_Id => dispatch({ type: "LISTTASK", project_Id }),
    AddTask: task => dispatch(addTask(task)),
    EditTask: editTask => dispatch({ type: "EDITTASK", editTask }),
    DeleteTask: id => dispatch({ type: "DELETETASK", id }),
    getTaskById: id => dispatch({ type: "GETTASKBYID", id }),
    Comment: comment => dispatch({ type: "COMMENT", comment })
  };
};
const mapStateToProps = state => {
  return {
    getListTask: state.TaskList,
    getTask: state.Task
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);
