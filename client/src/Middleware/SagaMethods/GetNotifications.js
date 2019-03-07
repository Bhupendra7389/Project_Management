import axios from "axios";
import { put } from "redux-saga/effects";

export default function* getNotifications() {
  let Noty = yield axios.get("/Get/Notifications");

  yield put({ type: "GETALLNOTIFICATIONS", payload: Noty.data });
}
