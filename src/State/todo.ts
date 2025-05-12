import {
  SAVE_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_LOADING,
} from "../Actions/todo";
import { Reducer } from "redux";
import { todo } from "../models/todo";

export type todoStateType = {
  todos: todo[];
  loading: boolean;
  error: string | null;
};

export const initialTodoState: todoStateType = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer: Reducer<todoStateType> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case SAVE_TODOS: {
      return {
        ...todoState,
        todos: action.payload,
        loading: false,
        error: null,
      };
    }
    case FETCH_TODOS_LOADING: {
      return { ...todoState, loading: true, error: null };
    }
    case FETCH_TODOS_ERROR: {
      return { ...todoState, loading: false, error: action.payload };
    }
    default: {
      return todoState;
    }
  }
};
