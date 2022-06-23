import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { STUDENTS_FETCH } from "../Actions/students";
import { getStudentsSaga } from "./students";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(STUDENTS_FETCH, getStudentsSaga);
}
