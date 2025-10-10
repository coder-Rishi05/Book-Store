import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ book }) => {
  return (
    <div>
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
            <th className="border border-slate-400 rounded-md  ">Operations</th>
          </tr>
        </thead>
        <tbody>
          {book.map((item, index) => (
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
    </div>
  );
};

export default BooksTable;
