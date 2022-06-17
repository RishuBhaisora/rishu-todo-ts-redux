import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { FETCH_STUDENTS } from "../Actions/students";
import { getStudentsSaga } from "./students";

export const sagaMiddleware=createSagaMiddleware()

export function* rootSaga(){
    yield takeEvery(FETCH_STUDENTS,getStudentsSaga)
}