import _default from "react-redux/es/components/connect";
import { createStore, Reducer } from "redux";
import { todo } from "./models/todo";
import { user } from "./models/user";
import { initialTodoState, todoReducer } from "./State/todo";
import { initialUserState, userReducer } from "./State/user";

export type State = {
  todos: { [id: string]: todo };
  users: { [id: string]: user };
};

export const initialState: State = {
  todos: initialTodoState,
  users: initialUserState,
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  return {
    todos: todoReducer(currentState.todos, action),
    users: userReducer(currentState.users, action),
  };
};
const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
