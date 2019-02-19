import axios from "axios";
import { put } from "redux-saga/effects";

export default function* adminLogin(action) {
  const Data = yield axios.post(
    "http://localhost:8081/Login/AdminLogin",
    action.admin
  );

  yield put({ type: "SENDDATA", payload: Data.data.token });
  //console.log("Data", Data.data);
  // action.admin.history.push("/Admin");
}
