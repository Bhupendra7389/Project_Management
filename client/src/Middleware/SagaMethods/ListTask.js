import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerRegistration() {
  let List = yield axios.get("/Get/TaskList");
  yield put({ type: "GETLISTTASK", payload: List.data });
}
