import { takeLatest, all } from "redux-saga/effects";
import adminRegistration from "./SagaMethods/AdminRegistration";
import developerRegistration from "./SagaMethods/DeveloperRegistration";
import addTask from "./SagaMethods/AddTask";
import addProject from "./SagaMethods/AddProject";
import adminLogin from "./SagaMethods/AdminLogin";
import developerLogin from "./SagaMethods/DeveloperLogin";

export default function* rootSaga() {
  yield all([
    yield takeLatest("ADMINREGISTRATION", adminRegistration),
    yield takeLatest("DEVELOPERREGISTRATION", developerRegistration),
    yield takeLatest("ADDTASK", addTask),
    yield takeLatest("ADDPROJECT", addProject),
    yield takeLatest("ADMINLOGIN", adminLogin),
    yield takeLatest("DEVELOPERLOGIN", developerLogin)
  ]);
}
