import { Reducer } from "redux";
import { STUDENTS_FETCHED } from "../Actions/students";
import convertArrayToObject from "../ArrayToObjectReducer";
import { students } from "../models/students";

type studentStateType = {
  [id: string]: students;
};
export const initialStudentState: studentStateType = {};

export const studentReducer: Reducer<studentStateType> = (
  studentsState = initialStudentState,
  action
) => {
  switch (action.type) {
    case STUDENTS_FETCHED: {
      const newObj = convertArrayToObject(action.payload, "cell");
      
      return newObj;
    }
    default: {
      return studentsState;
    }
  }
};
