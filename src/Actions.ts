import { todo } from "./models/todo";

export const TODO_ADDED = "ADD_TODO";
export const TODO_MARKED = "TODO_MARKED";
export const TODO_DELETE = "TODO_DELETE";

export const todoMarkedAction =(payLoad:string)=>{
    return { type: TODO_MARKED, payload: payLoad };
}
export const todoAddedAction = (payLoad: todo) => {
  return { type: TODO_ADDED, payload: payLoad };
};
export const todoDeleteAction = (payLoad: string) => {
  return { type: TODO_DELETE, payload: payLoad };
};