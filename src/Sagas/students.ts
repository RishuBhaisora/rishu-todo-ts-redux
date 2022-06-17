import { getStudents } from "../api";
import { call } from "redux-saga/effects";

export function* getStudentsSaga(): Generator {
  const data = yield call(getStudents);
  console.log(data);
}
