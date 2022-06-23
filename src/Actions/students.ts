export const STUDENTS_FETCH = "STUDENTS_FETCH";
export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

export const studentsFetched = (payLoad: any[]) => ({
  type: STUDENTS_FETCHED,
  payload: payLoad,
});
export const studentsFetch = () => ({type:STUDENTS_FETCH});
