import { FC, memo } from "react";
import { todo } from "../models/todo";
import { AiFillDelete } from "react-icons/ai";
import cn from "classnames"
import { useDispatch } from "react-redux";
import { TODO_DELETE } from "../Actions";

type TodoRowProps = {
  todos: todo;
}&{marked :(title:string)=>void} ;

const TodoRow: FC<TodoRowProps> = ({ todos ,marked}) => {
  
  const { id, title, done } = todos;
  const mark =()=>{
   marked(title);
  } 
  const dispatch = useDispatch();
  const todoDelete=()=>{
    dispatch({ type: TODO_DELETE ,payload:title});
  }
  return (
    <>
      <div className={cn(" space-x-2 flex items-center ")}>
        <input
          className="h-5 w-5  accent-yellow-400"
          type="checkbox"
          checked={done}
          onChange={mark}
        ></input>
        <h1 className="p-2 font-black text-xl">{title}</h1>

        <AiFillDelete onClick={todoDelete}></AiFillDelete>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
