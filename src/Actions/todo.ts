import { todo } from "../models/todo";

export const ADD_TODO_API = "ADD_TODO_API";
export const MARK_TODO_API = "MARK_TODO_API";
export const DELETE_TODO_API = "DELETE_TODO_API";
export const SAVE_TODOS = "SAVE_TODOS";
export const FETCH_TODOS_API = "FETCH_TODOS_API";
export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";

export const markTodoApiAction = (todo: todo) => {
  return { type: MARK_TODO_API, payload: todo };
};

export const addTodoApiAction = (title: string) => {
  return { type: ADD_TODO_API, payload: title };
};

export const deleteTodoApiAction = (payLoad: string) => {
  return { type: DELETE_TODO_API, payload: payLoad };
};

export const saveTodosAction = (todos: todo[]) => {
  return { type: SAVE_TODOS, payload: todos };
};

export const fetchTodosAction = () => {
  return { type: FETCH_TODOS_API };
};

export const fetchTodosLoadingAction = () => {
  return { type: FETCH_TODOS_LOADING };
};

export const fetchTodosErrorAction = (error: string) => {
  return { type: FETCH_TODOS_ERROR, payload: error };
};
