import { ChangeEvent, FC, memo, useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { doneSelector, todoSelector } from "../Selectors";
import { todo } from "../models/todo";
import { todoAddedAction } from "../Actions";
import { State } from "../Store";

type TodoCreateFormProps = {
  toDoList: todo[];
  doneList: todo[];
  addTodo: (payLoad: todo) => void;
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

  const toDoAdd = () => {
    if (done !== input && todo !== input) {
      if (input) {
        addTodo({ id: input, title: input, done: false });
        updateTodoCreateForm(!showTodoCreateForm);
      }
    }
  };

  const inputValue = (props:ChangeEvent<HTMLInputElement>) => {
    changeInput(props.target.value);
  };
  const toggleForm = () => {
    updateTodoCreateForm(!showTodoCreateForm);
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
          <div className="space-y-4">
            <h1 className="font-bold text-xl"> Create a todo</h1>

            <input
              value={input}
              placeholder="Write Things ToDo"
              onChange={inputValue}
              className="border-2 max-w-screen-md  p-2 rounded-md "
            ></input>
          </div>
          <div className="flex space-x-2 ">
            <Button onClick={toDoAdd} input="Save"></Button>
            <Button onClick={toggleForm} input="Cancel" theme="fourth"></Button>
          </div>
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
  addTodo: todoAddedAction,
};

export default connect(listMapper, todoAddMapper)(memo(TodoCreateForm));
