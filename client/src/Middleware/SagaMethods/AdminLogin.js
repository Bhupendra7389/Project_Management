import axios from "axios";
import { put } from "redux-saga/effects";

export default function* adminLogin(action) {
  const Data = yield axios.post(
    "http://localhost:8081/Login/AdminLogin",
    action.admin
  );
  localStorage.setItem("Token", Data.data.token);
  if (localStorage.getItem("Token") !== "undefined") {
    action.admin.history.push("/AdminProfile");
  } else {
    action.admin.history.push("/AdminLog");
  }

  yield put({ type: "SENDDATA", payload: Data.data });
  //console.log("Data", Data.data);
  // action.admin.history.push("/Admin");
}
