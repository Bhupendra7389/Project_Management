import Task from "../Components/Project/Task";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    AddTask: task => dispatch({ type: "ADDTASK", task })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Task);
