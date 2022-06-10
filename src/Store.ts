import _default from "react-redux/es/components/connect";
import { createStore, Reducer } from "redux";
import { TODO_ADDED, TODO_DELETE, TODO_MARKED } from "./Actions/todo";
import { USER_ADDED } from "./Actions/user";

import convertArrayToObject from "./ArrayToObjectReducer";
import { todo } from "./models/todo";
import { user } from "./models/user";

const value = localStorage.getItem("currentSavedState");
let currentSavedState = value ? JSON.parse(value) : { todos: {} };

export type State = {
  todos: { [id: string]: todo };
  users: { [id: string]: user };
};

const initialState: State = {
  todos: currentSavedState.todos,
  users: {},
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      const newTodo = {
        ...currentState,
        todos: { ...currentState.todos, [action.payload.id]: action.payload },
      };
      localStorage.setItem("currentSavedState", JSON.stringify(newTodo));
      return newTodo;
    }
    case TODO_MARKED: {
      const newTodo = {
        ...currentState,
        todos: {
          ...currentState.todos,
          [action.payload.title]: {
            ...currentState.todos[action.payload.title],
            done: action.payload.done,
          },
        },
      };
      localStorage.setItem("currentSavedState", JSON.stringify(newTodo));
      return newTodo;
    }
    case TODO_DELETE: {
      const newTodo = Object.keys(currentState.todos)
        .map((e) => currentState.todos[e])
        .filter((e) => e.id !== action.payload);

      const newobj = convertArrayToObject(newTodo);

      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({ ...currentState, todos: newobj })
      );
      return { ...currentState, todos: newobj };
    }
    case USER_ADDED: {
      const newUser = {
        ...currentState,
        users: { ...currentState.users, [action.payload.id]: action.payload },
      };
      return newUser;
    }
    default: {
      return currentState;
    }
  }
};
const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
