import axios from "axios";

export default function* developerRegistration(action) {
  let User = yield axios.post(
    "/Register/DeveloperRegistration",
    action.developer
  );
  if (User !== Error) {
    action.developer.history.push("/DeveloperLog");
  }
}
