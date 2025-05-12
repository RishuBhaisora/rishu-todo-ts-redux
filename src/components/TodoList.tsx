import { FC, memo, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { markTodoApiAction, fetchTodosAction } from "../Actions/todo";

import { todo } from "../models/todo";
import { doneSelector, todoSelector } from "../Selectors/todo";
import { State } from "../Store";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: todo[];
  marked: (todo: todo) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, marked }) => {

  return (
    <>
      <div>
        {todos.map((t) => (
          <TodoRow marked={marked} key={t._id} todo={t} />
        ))}
      </div>
    </>
  );
};

const incompleteMapper = (s: State) => {
  return { todos: todoSelector(s) };
};
const completeMapper = (s: State) => {
  return { todos: doneSelector(s) };
};
const markedMapper = {
  marked: markTodoApiAction,
};

export const IncompleteTodoList = connect(
  incompleteMapper,
  markedMapper
)(TodoList);
export const CompleteTodoList = connect(completeMapper, markedMapper)(TodoList);

export default memo(TodoList);
