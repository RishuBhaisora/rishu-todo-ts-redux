import { State } from "./Store";

export const doneSelector = (s :State) => s.todos.filter((t) => t.done);
export const todoSelector = (s: State) => s.todos.filter((t) => !t.done);
export const doneCountSelector = (s: State) => s.todos.filter((t) => t.done).length;
export const todoCountSelector = (s: State) => s.todos.filter((t) => !t.done).length;
