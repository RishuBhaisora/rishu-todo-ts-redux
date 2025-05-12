import { FC, memo } from "react";
import { connect } from "react-redux";
import { doneCountSelector, todoCountSelector } from "../Selectors/todo";
import { State } from "../Store";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogout } from "../Actions/auth";

type HeaderProps = {
  todoCount: number;
  doneCount: number;
};

const Header: FC<HeaderProps> = ({ todoCount, doneCount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-4 items-center border text-2xl font-black p-2">
        <h1>XTodo</h1>
        <h1 className="text-xl text-red-600">Todo Count: {todoCount}</h1>
        <h1 className="text-xl text-green-600">Done Count: {doneCount}</h1>
        <button
          className=" p-2 rounded-md text-white bg-red-600 text-xl font-bold"
          onClick={() => dispatch(authLogout())}
        >
          Logout
        </button>
      </div>
      <Outlet></Outlet>
    </>
  );
};

Header.defaultProps = {};

const countMapper = (s: State) => {
  return { todoCount: todoCountSelector(s), doneCount: doneCountSelector(s) };
};

export default connect(countMapper)(memo(Header));
