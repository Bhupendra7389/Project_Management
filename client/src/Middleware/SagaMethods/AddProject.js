import axios from "axios";
export default function* addProject(action) {
  yield axios
    .post("http://localhost:8081/Add/AddProject", action.project)
    .then(res => {
      return res.data;
    });
}
