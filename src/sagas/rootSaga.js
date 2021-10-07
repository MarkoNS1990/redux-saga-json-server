import { all } from "redux-saga/effects";
import {
  watchAddUser,
  watchLoadUsers,
  watchRemoveUser,
  watchUpdateUser,
} from "./usersSaga";

export default function* rootSaga() {
  yield all([
    watchLoadUsers(),
    watchAddUser(),
    watchRemoveUser(),
    watchUpdateUser(),
  ]);
}
