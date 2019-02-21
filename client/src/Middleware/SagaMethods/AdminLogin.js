import axios from "axios";
import { put } from "redux-saga/effects";

export default function* adminLogin(action) {
  const Data = yield axios.post(
    "http://localhost:8081/Login/AdminLogin",
    action.admin
  );
  localStorage.setItem("Token", Data.data.token);
  localStorage.setItem("Email", Data.data.user.Email);
  localStorage.setItem("Name", Data.data.user.Name);
  localStorage.setItem("Id", Data.data.user._id);
  localStorage.setItem("Position", Data.data.user.Position);
  if (localStorage.getItem("Token") !== "undefined") {
    action.admin.history.push("/AdminProfile");
  } else {
    action.admin.history.push("/AdminLog");
  }

  yield put({ type: "SENDDATA", payload: Data.data });
}
