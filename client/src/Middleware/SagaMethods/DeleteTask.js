import axios from "axios";
import { put } from "redux-saga/effects";
export default function* deleteTask(action) {
  yield axios.delete("http://localhost:8081/Delete/DeleteTask/" + action.id);
  yield put({ type: "LISTTASK" });
}
