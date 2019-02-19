import axios from "axios";

export default function* adminRegistration(action) {
  axios.post("http://localhost:8081/Register/AdminRegistration", action.admin);
}
