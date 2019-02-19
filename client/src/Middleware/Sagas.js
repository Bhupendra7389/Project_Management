import { takeLatest, all } from "redux-saga/effects";
import adminRegistration from "./SagaMethods/AdminRegistration";
import developerRegistration from "./SagaMethods/DeveloperRegistration";
import addTask from "./SagaMethods/AddTask";
import addProject from "./SagaMethods/AddProject";
import adminLogin from "./SagaMethods/AdminLogin";

export default function* rootSaga() {
  yield all([yield takeLatest("ADMINREGISTRATION", adminRegistration)]);
  yield all([yield takeLatest("DEVELOPERREGISTRATION", developerRegistration)]);
  yield all([yield takeLatest("ADDTASK", addTask)]);
  yield all([yield takeLatest("ADDPROJECT", addProject)]);
  yield all([yield takeLatest("ADMINLOGIN", adminLogin)]);
}
