import axios from "axios";
import { put } from "redux-saga/effects";

export default function* getNotifications(action) {
  let Noty = yield axios.get("/Get/Notifications/" + action.id);

  yield put({ type: "GETALLNOTIFICATIONS", payload: Noty.data });
}
