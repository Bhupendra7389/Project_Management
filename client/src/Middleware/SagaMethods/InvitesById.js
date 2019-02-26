import axios from "axios";
import { put } from "redux-saga/effects";

export default function* invitesById(action) {
  console.log(action.id);
  let task = yield axios.get("/Invite/InvitesById/" + action.id);

  yield put({ type: "INVITESBYPROJECT", payload: task.data });
}
