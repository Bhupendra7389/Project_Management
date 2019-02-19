import axios from "axios";

export default function* adminRegistration(action) {
  yield axios.post(
    "http://localhost:8081/Register/AdminRegistration",
    action.admin
  );
}
