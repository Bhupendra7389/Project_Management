import axios from "axios";
import { put } from "redux-saga/effects";

export default function* listTask(action) {
  let List = yield axios.get("/Get/TaskList/" + action.project_Id);
  yield put({ type: "GETLISTTASK", payload: List.data });
}
