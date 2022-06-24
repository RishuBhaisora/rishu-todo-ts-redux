import _default from "react-redux/es/components/connect";
import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { students } from "./models/students";
import { todo } from "./models/todo";
import { user } from "./models/user";
import { rootSaga, sagaMiddleware } from "./Sagas";
import { initialStudentState, studentReducer } from "./State/students";
import { initialTodoState, todoReducer } from "./State/todo";
import { initialUserState, userReducer } from "./State/user";

export type State = {
  todos: { [id: string]: todo };
  users: { [id: string]: user };
  students:{[id: string]: students};
};

export const initialState: State = {
  todos: initialTodoState,
  users: initialUserState,
  students: initialStudentState,
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  
  
  return {
    todos: todoReducer(currentState.todos, action),
    users: userReducer(currentState.users, action),
    students:studentReducer(currentState.students,action)
   
  };
  
};
const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);

export default Store;
