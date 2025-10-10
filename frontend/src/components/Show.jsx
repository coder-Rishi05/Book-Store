import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbtn from "./Backbtn";
import Loader from "../Loader/Loader";

const Show = () => {
  const [book, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBooks(res.data.book);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <Backbtn />
      <h1 className="text-3xl my-4">Show Books</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Id
            </span>
            <span className="">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Title
            </span>
            <span className="">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Author
            </span>
            <span className="">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Publish year
            </span>
            <span className="">{book.publishyear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Create Time
            </span>
            <span className="">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 rounded-2xl w-fit p-4">
              Update Time
            </span>
            <span className="">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
        // book.map((item,index)=>(
        //   <>

        //   </>
        // ))
      )}
    </div>
  );
};

export default Show;
