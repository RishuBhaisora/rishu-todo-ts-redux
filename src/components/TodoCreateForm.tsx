import { FC, memo } from "react";
import Button from "./Button";

type TodoCreateFormProps = {
  showTodoCreateForm: boolean;
  toggleForm: () => void;
  input: string;
  inputValue: (a: any) => void;
  showToDo: () => void;
};

const TodoCreateForm: FC<TodoCreateFormProps> = ({
  showTodoCreateForm,
  toggleForm,
  input,
  inputValue,
  showToDo,
}) => {
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
            <Button onClick={showToDo} input="Save"></Button>
            <Button onClick={toggleForm} input="Cancel" theme="fourth"></Button>
          </div>
        </div>
      )}
    </>
  );
};

TodoCreateForm.defaultProps = {};

export default memo(TodoCreateForm);
