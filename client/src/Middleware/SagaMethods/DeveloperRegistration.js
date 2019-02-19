import axios from "axios";

export default function* developerRegistration(action) {
  axios.post(
    "http://localhost:8081/Register/DeveloperRegistration",
    action.developer
  );
}
