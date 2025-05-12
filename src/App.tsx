import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage";
import AuthPage from "./components/AuthPage";
import { useSelector } from "react-redux";
import { tokenSelector } from "./Selectors/auth";

function App() {
  const token = useSelector(tokenSelector);

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <Route path="/" element={<Header />}>
            <Route index element={<Navigate to="/todoPage" />} />
            <Route path="todoPage" element={<AddTodoPage />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthPage />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
