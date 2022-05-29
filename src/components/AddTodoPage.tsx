import { FC, memo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TODO_ADDED, TODO_MARKED } from "../Actions";
import H3 from "./H3";
import TodoCreateForm from "./TodoCreateForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";
import { todo } from "../models/todo";
import { doneSelector, todoSelector } from "../Selectors";




type AddTodoPageProps = {};

const AddTodoPage: FC<AddTodoPageProps> = (props) => {
    const selector = useSelector;
    const dispatch = useDispatch();
    const [showTodoCreateForm, updateTodoCreateForm] = useState(true);
    const [input, changeInput] = useState("");
    const toDoList = selector(todoSelector);
    const doneList = selector(doneSelector);

    const addToDo = (payLoad: todo) => {
      dispatch({ type: TODO_ADDED, payload: payLoad });
    };

    let done: string;
    let todo: string;
    doneList.map((t: todo) => (done = t.title));
    toDoList.map((t: todo) => (todo = t.title));

    const showToDo = () => {
      if (done !== input && todo !== input) {
        if (input) {
          addToDo({ id: input, title: input, done: false });
          updateTodoCreateForm(!showTodoCreateForm);
        }
      }
    };

    const inputValue = (props: any) => {
      changeInput(props.target.value);
    };
    const marked=(payLoad:string)=>{
     dispatch({ type: TODO_MARKED, payload: payLoad });

    }

    const toggleForm = () => {
      updateTodoCreateForm(!showTodoCreateForm);
    };
  return (
    <>
      <div className="p-5">
        <H3 className="mb-2">Things To Do</H3>
        <IncompleteTodoList marked={marked}></IncompleteTodoList>
        <TodoCreateForm
          toggleForm={toggleForm}
          inputValue={inputValue}
          input={input}
          showToDo={showToDo}
          showTodoCreateForm={showTodoCreateForm}
        />

        <H3 className="mt-4 mb-2">Things Done</H3>
        <CompleteTodoList marked={marked}></CompleteTodoList>
      </div>
    </>
  );
};

AddTodoPage.defaultProps = {};

export default memo(AddTodoPage);