import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Backbtn({ destination = "/" }) {
  return (
    <div>
      <Link to={destination} className="bg-sky-900 text-white px-4 py-1 rounded-lg w-fit " >
        <BsArrowLeft 
        className="text-2xl"
        />
      </Link>
    </div>
  );
}

export default Backbtn;
