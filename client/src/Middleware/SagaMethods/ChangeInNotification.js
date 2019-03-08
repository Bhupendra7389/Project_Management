import axios from "axios";
import { put } from "redux-saga/effects";
export default function* changeInNotification(action) {
  try {
    yield axios.put("/Update/Notification/" + action.id);
    yield put({ type: "GETNOTIFICATIONS" });
  } catch (error) {
    console.log("SagaMethod Error");
  }
}
