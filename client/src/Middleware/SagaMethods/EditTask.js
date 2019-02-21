import axios from "axios";
import { put } from "redux-saga/effects";

export default function* editTask(action) {
  console.log(action.editTask.Id);
  yield axios.patch(
    "http://localhost:8081/Edit/EditTask/" + action.editTask.Id,
    action.editTask
  );
  yield put({ type: "LISTTASK" });
}
