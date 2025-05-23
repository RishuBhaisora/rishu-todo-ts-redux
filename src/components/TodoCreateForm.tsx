import { ChangeEvent, FC, memo, useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { doneSelector, todoSelector } from "../Selectors/todo";
import { todo } from "../models/todo";

import { State } from "../Store";
import { addTodoApiAction, fetchTodosAction } from "../Actions/todo";

type TodoCreateFormProps = {
  toDoList: todo[];
  doneList: todo[];
  addTodo: (title: string) => void;
};

const TodoCreateForm: FC<TodoCreateFormProps> = ({
  addTodo,
  toDoList,
  doneList,
}) => {
  const [input, changeInput] = useState("");
  const [showTodoCreateForm, updateTodoCreateForm] = useState(true);

  let done: string;
  let todo: string;
  doneList.map((t: todo) => (done = t.title));
  toDoList.map((t: todo) => (todo = t.title));

  const toDoAdd = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input) {
      addTodo(input);
      updateTodoCreateForm(!showTodoCreateForm);
      changeInput("");
    }
  };

  const inputValue = (props: ChangeEvent<HTMLInputElement>) => {
    changeInput(props.target.value);
  };
  const toggleForm = () => {
    updateTodoCreateForm(!showTodoCreateForm);
    changeInput("");
  };
  return (
    <>
      {showTodoCreateForm && (
        <Button
          onClick={toggleForm}
          theme="third"
          input="+ Add a todo"
        ></Button>
      )}
      {!showTodoCreateForm && (
        <div className="flex flex-col m-4 px-4 py-1 border-2 max-w-screen-md space-y-4 rounded-md ">
          <form onSubmit={toDoAdd}>
            <div className="space-y-4">
              <h1 className="font-bold text-xl"> Create a todo</h1>

              <input
                value={input}
                placeholder="Write Things ToDo"
                onChange={inputValue}
                className="border-2 max-w-screen-md  p-2 rounded-md "
              ></input>
            </div>
            <div className="pt-4 flex space-x-2 ">
              <Button type="submit" input="Save"></Button>

              <Button
                onClick={toggleForm}
                input="Cancel"
                theme="fourth"
              ></Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

TodoCreateForm.defaultProps = {};
const listMapper = (s: State) => {
  return { toDoList: todoSelector(s), doneList: doneSelector(s) };
};

const todoAddMapper = {
  addTodo: addTodoApiAction,
};

export default connect(listMapper, todoAddMapper)(memo(TodoCreateForm));
