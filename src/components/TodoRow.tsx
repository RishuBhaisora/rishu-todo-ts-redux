import { FC, memo } from "react";
import { todo } from "../models/todo";
import { AiFillDelete } from "react-icons/ai";
import cn from "classnames";
import { connect } from "react-redux";
import { deleteTodoApiAction } from "../Actions/todo";

type TodoRowProps = {
  todo: todo;
  marked: (todo: todo) => void;
  todoDelete: (id: string) => {};
};

const TodoRow: FC<TodoRowProps> = ({ todo, marked, todoDelete }) => {
  const { _id, title, done } = todo;
  const mark = () => {
    marked(todo);
  };

  const deleteTodo = () => {
    todoDelete(_id);
  };

  return (
    <>
      <div className={cn(" space-x-2 flex items-center ")}>
        <input
          className="h-5 w-5  accent-yellow-400"
          type="checkbox"
          checked={done}
          onChange={mark}
        ></input>
        <h1
          className={cn("p-3 decoration-double font-black text-xl", {
            "line-through": done,
          })}
        >
          {title}
        </h1>
        <AiFillDelete onClick={deleteTodo}></AiFillDelete>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};
const deleteMapper = {
  todoDelete: deleteTodoApiAction,
};

export default connect(undefined, deleteMapper)(memo(TodoRow));
