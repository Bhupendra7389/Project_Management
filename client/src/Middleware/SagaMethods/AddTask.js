import axios from "axios";
export default function* addTask(action) {
  yield axios.post("http://localhost:8081/Add/AddTask", action.task);
}
