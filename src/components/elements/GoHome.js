import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineArrowBack } from "react-icons/md";
export default function GoHome() {
  return (
    <div>
      <Link
        className="flex flex-auto fixed top-0 right-0   px-2 p-2 left-0 float-left text-white "
        to="/"
      >
        <MdOutlineArrowBack
          className=" text-gray-50 ease-in-out active:scale-90 active:text-gray-600  hover:text-gray-200  duration-200  "
          size="32"
        ></MdOutlineArrowBack>
      </Link>
    </div>
  );
}
