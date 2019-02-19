import axios from "axios";

export default function* developerRegistration(action) {
  yield axios.post(
    "http://localhost:8081/Register/DeveloperRegistration",
    action.developer
  );
}
