import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.books);
        setLoading(false);
        console.log(res.data.books);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-400 rounded-md ">No</th>
              <th className="border border-slate-400 rounded-md ">Title</th>
              <th className="border border-slate-400 rounded-md max-md:hidden ">
                Author
              </th>
              <th className="border border-slate-400 rounded-md max-md:hidden ">
                Publish Year
              </th>
              <th className="border border-slate-400 rounded-md  ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr
                key={index + 1}
                className="text-center border-2 border-green-500  rounded-md h-8"
              >
                <td className="border border-slate-500 rounded-md">
                  {index + 1}
                </td>
                <td className="border border-slate-500 rounded-md">
                  {item.title}
                </td>
                <td className="border border-slate-500 rounded-md">
                  {item.author}
                </td>
                <td className="border border-slate-500 rounded-md">
                  {item.publishyear}
                </td>
                <td className="border border-slate-500 rounded-md text-center ">
                  <div className=" flex justify-center gap-x-5   ">
                    <Link to={`/books/details/${item._id}`}>
                      <BsInfoCircle className="text-3xl text-green-800" />
                    </Link>
                    <Link to={`/books/update/${item._id}`}>
                      <AiOutlineEdit className="text-3xl text-green-800" />
                    </Link>
                    <Link to={`/books/delete/${item._id}`}>
                      <MdOutlineDelete className="text-3xl text-green-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
