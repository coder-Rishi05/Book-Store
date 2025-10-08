import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import CreateBooks from "./components/CreateBooks";
import DeleteBook from "./components/DeleteBook";
import EditBook from "./components/EditBook";
import Show from "./components/Show";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"/books/create"} element={<CreateBooks />}></Route>
        <Route path={"/books/details/:id"} element={<Show />}></Route>
        <Route path={"/books/update/:id"} element={<EditBook />}></Route>
        <Route path={"/books/delete/:id"} element={<DeleteBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
