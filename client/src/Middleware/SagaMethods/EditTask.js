import axios from "axios";
import { put } from "redux-saga/effects";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* editTask(action) {
  let user = yield axios.patch(
    "/Edit/EditTask/" + action.editTask.Id,
    action.editTask
  );
  yield axios.put("/Add/Notification", {
    Notification: "Task Updated",
    Task_Name: user.data._id
  });
  if (user) {
    yield showNotification({
      data: "Task Updated Successfully",
      type: "success"
    });
    yield put({ type: "LISTTASK" });
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
