import { createSelector } from "reselect";
import { State } from "../Store";
import { values } from "lodash";

export const todoStateSelector = (s: State) => s.todos;

export const todoState = createSelector(
  todoStateSelector,
  (todoState) => values(todoState)
  // Object.keys(todoState).map((todoId) => todoState[todoId])
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
