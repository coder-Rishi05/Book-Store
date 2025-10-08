import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbtn from "./Backbtn";
import Loader from "../Loader/Loader";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishyear, setPublishYear] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEditdBook = () => {
    const data = { title, author, publishyear };
    setLoading(true);
    axios
      .post(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please Chech console.");
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <Backbtn />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Loader /> : " "}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[40rem] p-4 mx-auto ">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishyear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSavedBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
