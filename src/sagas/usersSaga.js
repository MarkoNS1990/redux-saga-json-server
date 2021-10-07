import { takeEvery, call, put } from "redux-saga/effects";
import {
  REMOVE_USER,
  ADD_USER,
  fetchUsersSuccess,
  FETCH_USERS_BEGIN,
  UPDATE_USER,
} from "../redux/users/usersActions";

//worker sagas
export function* loadUsers() {
  const response = yield call(fetch, "http://localhost:3000/users");

  const users = yield response.json();
  console.log(users);
  yield put(fetchUsersSuccess(users));
}

export function* addUserWorker(action) {
  yield call(fetch, "http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(action.payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function* removeUserWorker(action) {
  const id = action.payload.id.toString();

  yield call(fetch, `http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function* updateUserWorker(action) {
  yield call(fetch, `http://localhost:3000/users/${action.payload.id}`, {
    method: "PUT",
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

export function* watchRemoveUser() {
  yield takeEvery(REMOVE_USER, removeUserWorker);
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUserWorker);
}
