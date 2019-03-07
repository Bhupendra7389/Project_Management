import axios from "axios";
import { put } from "redux-saga/effects";

export default function* getNotifications() {
  console.log("HEllo");
  let Noty = yield axios.get("/GET/NOTIFICATIONS");
  console.log(Noty);
  yield put({ type: "GETALLNOTIFICATIONS", payload: Noty.data });
}
