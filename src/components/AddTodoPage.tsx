import { FC, memo, useEffect } from "react";
import H3 from "./H3";
import TodoCreateForm from "./TodoCreateForm";
import { IncompleteTodoList, CompleteTodoList } from "./TodoList";
import { fetchTodosAction } from "../Actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { todoErrorSelector } from "../Selectors/todo";
import { todoLoadingSelector } from "../Selectors/todo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AddTodoPageProps = {};

const AddTodoPage: FC<AddTodoPageProps> = () => {
  const dispatch = useDispatch();

  const loading = useSelector(todoLoadingSelector);
  const error = useSelector(todoErrorSelector);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchTodosAction());
  }, []);

  return (
    <>
      <div className="p-5">
        <ToastContainer position="top-right" autoClose={3000} />
        <h1 className=" text-4xl font-black p-2">Things To Get Done</h1>
        <H3 className="mb-2">Things To Do</H3>
        {loading ? (
          <H3 className="mb-2">Loading...</H3>
        ) : (
          <IncompleteTodoList />
        )}
        <TodoCreateForm />
        <H3 className="mt-4 mb-2">Things Done</H3>
        {loading ? <H3 className="mb-2">Loading...</H3> : <CompleteTodoList />}
      </div>
    </>
  );
};

AddTodoPage.defaultProps = {};

export default memo(AddTodoPage);
