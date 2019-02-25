import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerRegistration() {
  let List = yield axios.get("/Get/ProjectList");
  yield put({ type: "GETLISTPROJECT", payload: List.data });
}
