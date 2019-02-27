import { connect } from "react-redux";
import ListTask from "../Components/Project/ListTask";
const mapDispatchToProps = dispatch => {
  return {
    ListTask: () => dispatch({ type: "LISTTASK" }),
    AddTask: task => dispatch({ type: "ADDTASK", task }),
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
