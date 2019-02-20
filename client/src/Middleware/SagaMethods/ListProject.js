import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerRegistration(action) {
  let List = yield axios.get(
    "http://localhost:8081/Get/ProjectList",
    action.developer
  );
  yield put({ type: "GETLISTPROJECT", payload: List.data });
}
