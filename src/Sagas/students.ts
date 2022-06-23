import { getStudents } from "../api";
import { call, put } from "redux-saga/effects";
import { studentsFetched } from "../Actions/students";

export function* getStudentsSaga(): Generator<any, any, any> {
  const data = yield call(getStudents);
  yield put(studentsFetched(data));
}
