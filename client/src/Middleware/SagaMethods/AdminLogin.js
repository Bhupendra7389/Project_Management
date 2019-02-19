import axios from "axios";

export default function* adminLogin(action) {
  yield axios.post("http://localhost:8081/Login/AdminLogin", action.admin);
}
