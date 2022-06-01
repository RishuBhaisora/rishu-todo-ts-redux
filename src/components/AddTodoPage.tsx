import { FC, memo} from "react";
import H3 from "./H3";
import TodoCreateForm from "./TodoCreateForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";

type AddTodoPageProps = {};

const AddTodoPage: FC<AddTodoPageProps> = () => {
  return (
    <>
      <div className="p-5">
        <H3 className="mb-2">Things To Do</H3>
        <IncompleteTodoList></IncompleteTodoList>
        <TodoCreateForm/>
        <H3 className="mt-4 mb-2">Things Done</H3>
        <CompleteTodoList></CompleteTodoList>
      </div>
    </>
  );
};

AddTodoPage.defaultProps = {};

export default memo(AddTodoPage);
