import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http//localhost:3000/books")
      .then((res) => {
        setBooks(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);

  return <div>This is Home page</div>;
};

export default Home;
