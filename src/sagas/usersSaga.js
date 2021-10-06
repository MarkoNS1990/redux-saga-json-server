import { takeEvery, call, put } from "redux-saga/effects";
import {
  addUser,
  ADD_USER,
  fetchUsersSuccess,
  FETCH_USERS_BEGIN,
} from "../redux/users/usersActions";

//worker sagas
export function* loadUsers() {
  const response = yield call(fetch, "http://localhost:3000/users");

  const users = yield response.json();
  console.log(users);
  yield put(fetchUsersSuccess(users));
}

export function* addUserWorker(action) {
  console.log(action.payload);
  yield call(fetch, "http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(action.payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//watcher sagas
export function* watchLoadUsers() {
  yield takeEvery(FETCH_USERS_BEGIN, loadUsers);
}

export function* watchAddUser() {
  yield takeEvery(ADD_USER, addUserWorker);
}
