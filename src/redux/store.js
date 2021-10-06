import { createStore, applyMiddleware } from "redux";
import usersReducer from "./users/usersReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
