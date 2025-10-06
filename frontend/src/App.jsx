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
        <Route path="/create" element={<CreateBooks />}></Route>
        <Route path="/delete" element={<DeleteBook />}></Route>
        <Route path="/update" element={<EditBook />}></Route>
        <Route path="/show" element={<Show />}></Route>
      </Routes>
    </div>
  );
}

export default App;
