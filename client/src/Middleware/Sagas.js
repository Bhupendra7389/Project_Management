import { takeLatest, all } from "redux-saga/effects";
import adminRegistration from "./SagaMethods/AdminRegistration";
import developerRegistration from "./SagaMethods/DeveloperRegistration";

export default function* rootSaga() {
  yield all([yield takeLatest("ADMINREGISTRATION", adminRegistration)]);
  yield all([yield takeLatest("DEVELOPERREGISTRATION", developerRegistration)]);
}
