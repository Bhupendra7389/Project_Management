import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerRegistration() {
  let ListDeveloper = yield axios.get("/Get/ListDeveloper");
  yield put({ type: "GETLISTDEVELOPER", payload: ListDeveloper.data });
}
