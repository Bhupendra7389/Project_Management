import axios from "axios";
import { put } from "redux-saga/effects";

export default function* editTask(action) {
  console.log(action.editTask.Id);
  yield axios.patch("/Edit/EditTask/" + action.editTask.Id, action.editTask);
  yield put({ type: "LISTTASK" });
}
