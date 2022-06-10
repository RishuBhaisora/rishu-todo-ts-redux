import { FC, memo } from "react";
import { connect } from "react-redux";
import { doneCountSelector, todoCountSelector } from "../Selectors/todo";
import { State } from "../Store";
import { Link, Outlet } from "react-router-dom";

type HeaderProps = {
todoCount:number,
doneCount:number
};

const Header: FC<HeaderProps> = ({todoCount,doneCount}) => {
  return (
    <>
      <div className="border text-2xl font-black p-2 flex space-x-6">
        <h1>XTodo</h1>
        <h1 className="text-xl text-red-600">Todo Count:{todoCount}</h1>
        <h1 className="text-xl text-green-600">Done Count: {doneCount}</h1>
      </div>
      <div className="text-xl font-black space-x-4 p-2 border underline " >
        <Link to="todoPage">TodoPage</Link>
        <Link to="userPage">UserPage</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

Header.defaultProps = {};

const countMapper=(s:State)=>{
return { todoCount :todoCountSelector(s),doneCount:doneCountSelector(s)}
}

export default connect(countMapper)(memo(Header));