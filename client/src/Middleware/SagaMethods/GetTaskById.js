import axios from "axios";
import { put } from "redux-saga/effects";

export default function* getTaskById(action) {
  console.log(action.id);
  let task = yield axios.get(
    "http://localhost:8081/Edit/GetTaskById/" + action.id
  );
  console.log(task.data);

  yield put({ type: "TASKBYID", payload: task.data });
}
