import axios from "axios";
import { put } from "redux-saga/effects";
export default function* addTask(action) {
  yield axios.post("http://localhost:8081/Add/AddTask", action.task);
  yield put({ type: "LISTTASK" });
}
