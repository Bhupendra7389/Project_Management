import axios from "axios";
import { put } from "redux-saga/effects";
export default function* addTask(action) {
  yield axios.post("/Add/Task", action.task);
  yield put({ type: "LISTTASK" });
}
