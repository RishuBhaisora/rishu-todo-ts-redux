import { FC, memo } from "react";
import { todo } from "../models/todo";
import { AiFillDelete } from "react-icons/ai";
import cn from "classnames";
import { connect} from "react-redux";
import { todoDeleteAction} from "../Actions";

type TodoRowProps = {
  todos: todo;
  marked: (title: string) => void;
  todoDelete:(title:string)=>{} 
};

const TodoRow: FC<TodoRowProps> = ({ todos, marked,todoDelete }) => {
  const {  title, done } = todos;
  const mark = () => {
    marked(title);
  };
  
  const deleteTodo = () => {todoDelete(title)}



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
const deleteMapper={
  todoDelete:todoDeleteAction
}

export default connect(undefined,deleteMapper)(memo(TodoRow));
