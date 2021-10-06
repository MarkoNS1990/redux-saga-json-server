import { all } from "redux-saga/effects";
import { watchAddUser, watchLoadUsers } from "./usersSaga";

export default function* rootSaga() {
  yield all([watchLoadUsers(), watchAddUser()]);
}
