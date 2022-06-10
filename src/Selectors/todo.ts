
import { State } from "../Store";

export const doneSelector = (s: State) =>
  Object.keys(s.todos)
    .map((t) => s.todos[t])
    .filter((t) => t.done);
export const todoSelector = (s: State) =>
  Object.keys(s.todos)
    .map((t) => s.todos[t])
    .filter((t) => !t.done);
export const doneCountSelector = (s: State) =>
  Object.keys(s.todos)
    .map((t) => s.todos[t])
    .filter((t) => t.done).length;
export const todoCountSelector = (s: State) =>
  Object.keys(s.todos)
    .map((t) => s.todos[t])
    .filter((t) => !t.done).length;
