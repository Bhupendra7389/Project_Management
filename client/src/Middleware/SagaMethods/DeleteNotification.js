import axios from "axios";
import { put } from "redux-saga/effects";

export default function* deleteNotification(action) {
  try {
    yield axios.delete("/Delete/Notification/" + action.id);
    yield put({ type: "GETNOTIFICATIONS" });
  } catch (error) {
    console.log("SagaMethod Error");
  }
}
