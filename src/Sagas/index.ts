import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { ADD_TODO_API, DELETE_TODO_API, FETCH_TODOS_API, MARK_TODO_API } from "../Actions/todo";
import { addTodoSaga, deleteTodoSaga, getTodosSaga, markTodoSaga } from "./todos";
import { AUTH_SIGNUP } from "../Actions/auth";
import { authLoginSaga, authSignupSaga } from "./auth";
import { AUTH_LOGIN } from "../Actions/auth";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(FETCH_TODOS_API, getTodosSaga);
  yield takeLatest(ADD_TODO_API, addTodoSaga);
  yield takeLatest(MARK_TODO_API, markTodoSaga);
  yield takeLatest(DELETE_TODO_API, deleteTodoSaga);
  yield takeLatest(AUTH_LOGIN, authLoginSaga);
  yield takeLatest(AUTH_SIGNUP, authSignupSaga);
}
