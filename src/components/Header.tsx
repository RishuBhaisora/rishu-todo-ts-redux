import { FC, memo } from "react";
import AddTodoPage from "./AddTodoPage";

import { connect } from "react-redux";
import { doneCountSelector, todoCountSelector } from "../Selectors";
import { State } from "../Store";

type HeaderProps = {
todoCount:number,
doneCount:number
};

const Header: FC<HeaderProps> = ({todoCount,doneCount}) => {
  return (
    <>
      <div className="border text-2xl font-black p-2 flex space-x-6">
        <h1>XTodo</h1>
        <h1 className="text-xl text-red-600">
          Todo Count:{todoCount}
        </h1>
        <h1 className="text-xl text-green-600">
          Done Count: {doneCount}
        </h1>
      </div>
      <h1 className=" text-4xl font-black p-2">Things To Get Done</h1>
      <AddTodoPage></AddTodoPage>
    </>
  );
};

Header.defaultProps = {};

const countMapper=(s:State)=>{
return { todoCount :todoCountSelector(s),doneCount:doneCountSelector(s)}
}

export default connect(countMapper)(memo(Header));