import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerLogin(action) {
  yield axios.post(
    "http://localhost:8081/Login/DeveloperLogin",
    action.developer
  );

  //yield put({ type: "SENDDATADEV", payload: Data.data.token });
  //console.log("Data", Data.data);
  //action.admin.history.push("/Admin");
}
