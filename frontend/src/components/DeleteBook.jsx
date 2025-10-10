import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Backbtn from "./Backbtn";
import Loader from "../Loader/Loader";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happend check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <Backbtn />

      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Loader /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl ">
          {" "}
          Are you sure You want to delete this book!
        </h3>
        <button
          className="p-4 bg-red-300 w-full m-8"
          onClick={handleDeleteBook}
        >
          Yes delete it.
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
