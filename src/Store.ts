import { createStore, Reducer } from "redux";
import {
  TODO_ADDED,
  TODO_MARKED,
 
  TODO_DELETE,
} from "./Actions";
import { todo } from "./models/todo";

let currentSavedState;
const value = localStorage.getItem("currentSavedState");
if(typeof value === "string") {
 currentSavedState= JSON.parse(value);
  }


export type State = {
  todos: todo[];
};

const initialState: State = {
  todos: currentSavedState.todos||[]
};

const reducer: Reducer<State> = (currentState = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED: {
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({
          ...currentState,
          todos: [...currentState.todos, action.payload],
        })
      );
      return {
        ...currentState,
        todos: [...currentState.todos, action.payload],
      };
    }
    case TODO_MARKED: {
      const newTodoArray = currentState.todos.map((t) => {
        if (t.title === action.payload) {
          return { ...t, done: !t.done };
        }
        return t;
      });
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({ ...currentState, todos: newTodoArray })
      );
      return { ...currentState, todos: newTodoArray };
    }
    
    case TODO_DELETE: {
      const newTodoArray = currentState.todos.filter(
        (t) => t.title !== action.payload
      );
      localStorage.setItem(
        "currentSavedState",
        JSON.stringify({ ...currentState, todos: newTodoArray })
      );
      return { ...currentState, todos: newTodoArray };
    }
    default: {
      return currentState;
    }
  }
};

const Store = createStore(reducer);
export default Store;
