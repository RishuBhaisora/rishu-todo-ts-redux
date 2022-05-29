import { FC, memo } from "react";
import { connect } from "react-redux";
import { todo } from "../models/todo";
import { doneSelector, todoSelector } from "../Selectors";
import { State } from "../Store";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: todo[];
} & { marked: (title: string) => void };

const TodoList: FC<TodoListProps> = ({ todos, marked }) => {
  return (
    <>
      <div>
        {todos.map((t) => (
          <TodoRow marked={marked} key={t.id} todos={t} />
        ))}
      </div>
    </>
  );
};

TodoList.defaultProps = {};

const incompleteMapper = (s: State) => {
  return { todos: todoSelector(s) };
};
const completeMapper = (s: State) => {
  return { todos: doneSelector(s) };
};

export const IncompleteTodoList = connect(incompleteMapper)(TodoList);
export const CompleteTodoList = connect(completeMapper)(TodoList);

export default memo(TodoList);
