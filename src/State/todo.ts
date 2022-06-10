import { TODO_ADDED, TODO_DELETE, TODO_MARKED } from "../Actions/todo";
import convertArrayToObject from "../ArrayToObjectReducer";
import { Reducer } from "redux";
import { todo } from "../models/todo";

const value = localStorage.getItem("currentSavedTodo");
let currentSavedTodo = value ? JSON.parse(value) : {};

type todoStateType = {
  [id: string]: todo;
};
export const initialTodoState: todoStateType = currentSavedTodo;

export const todoReducer: Reducer<todoStateType> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_ADDED: {
      const newTodo = {
        ...todoState,
        ...todoState,
        [action.payload.id]: action.payload,
      };

      localStorage.setItem("currentSavedTodo", JSON.stringify(newTodo));

      return newTodo;
    }

    case TODO_MARKED: {
      const newTodo = {
        ...todoState,
        ...todoState,
        [action.payload.title]: {
          ...todoState[action.payload.title],
          done: action.payload.done,
        },
      };
      localStorage.setItem("currentSavedTodo", JSON.stringify(newTodo));
      return newTodo;
    }
    case TODO_DELETE: {
      const newTodo = Object.keys(todoState)
        .map((e) => todoState[e])
        .filter((e) => e.id !== action.payload);

      const newobj = convertArrayToObject(newTodo);

      localStorage.setItem("currentSavedTodo", JSON.stringify(newobj));
      return newobj;
    }
    default: {
      return todoState;
    }
  }
};
