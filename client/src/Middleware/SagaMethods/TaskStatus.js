import axios from "axios";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* taskStatus(action) {
  let status = yield axios
    .put("/Update/TaskStatus/" + action.TaskStatus.TaskId, action.TaskStatus)
    .then(res => {
      return res.data;
    });
  if (status) {
    yield showNotification({
      data: "Status Updated",
      type: "success"
    });
  }
}
function* showNotification(user) {
  yield new Noty({
    theme: "bootstrap-v4",
    type: user.type,
    layout: "topRight",
    text: user.data,
    timeout: 1000
  }).show();
}
