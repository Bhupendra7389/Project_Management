import axios from "axios";
import { put } from "redux-saga/effects";

export default function* deleteDeveloperInvite(action) {
  try {
    console.log(action.user);
    yield axios.delete(
      "/Delete/DeleteDeveloperInvite/" + action.user.ProjectId,
      action.user
    );
    yield put({ type: "LISTDEVELOPER" });
  } catch (error) {
    console.log("SagaMethod Error");
  }
}
