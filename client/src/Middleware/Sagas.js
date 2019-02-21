import { takeLatest, all } from "redux-saga/effects";
import adminRegistration from "./SagaMethods/AdminRegistration";
import developerRegistration from "./SagaMethods/DeveloperRegistration";
import addTask from "./SagaMethods/AddTask";
import addProject from "./SagaMethods/AddProject";
import adminLogin from "./SagaMethods/AdminLogin";
import developerLogin from "./SagaMethods/DeveloperLogin";
import listProject from "./SagaMethods/ListProject";
import listTask from "./SagaMethods/ListTask";
import editTask from "./SagaMethods/EditTask";
import deleteTask from "./SagaMethods/DeleteTask";
export default function* rootSaga() {
  yield all([
    yield takeLatest("ADMINREGISTRATION", adminRegistration),
    yield takeLatest("DEVELOPERREGISTRATION", developerRegistration),
    yield takeLatest("ADDTASK", addTask),
    yield takeLatest("ADDPROJECT", addProject),
    yield takeLatest("ADMINLOGIN", adminLogin),
    yield takeLatest("DEVELOPERLOGIN", developerLogin),
    yield takeLatest("LISTPROJECT", listProject),
    yield takeLatest("LISTTASK", listTask),
    yield takeLatest("EDITTASK", editTask),
    yield takeLatest("DELETETASK", deleteTask)
  ]);
}
