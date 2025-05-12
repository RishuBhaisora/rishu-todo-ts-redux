import _default from "react-redux/es/components/connect";
import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todo } from "./models/todo";
import { rootSaga, sagaMiddleware } from "./Sagas";
import { initialTodoState, todoReducer, todoStateType } from "./State/todo";
import { authReducer, AuthState, initialAuthState } from "./State/auth";

export type State = { 
  todoState: todoStateType;
  authState: AuthState;
};

export const initialState: State = {
  todoState: initialTodoState,
  authState: initialAuthState,
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  return {
    todoState: todoReducer(currentState.todoState, action),
    authState: authReducer(currentState.authState, action),
  };
};
const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);

export default Store;
