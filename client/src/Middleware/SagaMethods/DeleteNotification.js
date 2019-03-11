import axios from "axios";
export default function* deleteNotification(action) {
  yield axios.post("/Remove/Notification", action.id);
}
