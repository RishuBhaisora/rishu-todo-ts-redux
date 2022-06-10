import Header from "./components/Header";
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/todoPage" />} />
          <Route path="todoPage" element={<AddTodoPage />} />
          <Route path="userPage" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
