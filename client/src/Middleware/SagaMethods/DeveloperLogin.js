import axios from "axios";
import { put } from "redux-saga/effects";

export default function* developerLogin(action) {
  let Data = yield axios.post(
    "http://localhost:8081/Login/DeveloperLogin",
    action.developer
  );

  localStorage.setItem("Token", Data.data.token);

  if (
    localStorage.getItem("Token") === "undefined" &&
    localStorage.getItem("Token") &&
    Data.data.user.Position === "Developer"
  ) {
    action.developer.history.push("/DeveloperProfile");
  } else if (Data.data.user.Position === "Admin") {
    action.developer.history.push("/AdminProfile");
  } else {
    action.developer.history.push("/DeveloperLog");
  }

  yield put({ type: "DEVELOPERSENDDATA", payload: Data.data });
}
