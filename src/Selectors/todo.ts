import { createSelector } from "reselect";
import { State } from "../Store";

export const todoStateSelector = (s: State) => s.todoState;

export const todoState = createSelector(
  todoStateSelector,
  (todoState) => todoState.todos
);
export const doneSelector = createSelector(todoState, (todo) =>
  todo.filter((t) => t.done)
);
export const todoSelector = createSelector(todoState, (todo) =>
  todo.filter((t) => !t.done)
);
export const doneCountSelector = createSelector(
  todoState,
  (todo) => todo.filter((t) => t.done).length
);
export const todoCountSelector = createSelector(
  todoState,
  (todo) => todo.filter((t) => !t.done).length
);

export const todoLoadingSelector = createSelector(
  todoStateSelector,
  (todoState) => todoState.loading
);

export const todoErrorSelector = createSelector(
  todoStateSelector,
  (todoState) => todoState.error
);
