import AddTodoPage from "./components/AddTodoPage";

import { useSelector } from "react-redux";
import { doneCountSelector, todoCountSelector } from "./Selectors";

function App() {
  return (
    <>
      <div className="border text-2xl font-black p-2 flex space-x-6">
        <h1>XTodo</h1>
        <h1 className="text-xl text-red-600">
          Todo Count:{useSelector(todoCountSelector)}
        </h1>
        <h1 className="text-xl text-green-600">
          Done Count: {useSelector(doneCountSelector)}
        </h1>
      </div>
      <h1 className=" text-4xl font-black p-2">Things To Get Done</h1>
      <AddTodoPage></AddTodoPage>
    </>
  );
}

export default App;
