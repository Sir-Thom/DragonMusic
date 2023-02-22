import React, { useState } from "react";
import {Link} from "react-router-dom";


import {MdOutlineArrowBack} from "react-icons/md"
export default function GoHome(){
    return (
        <div  >
            <Link className="flex flex-auto fixed   px-2 p-2 left-0 float-left text-white " to="/">
                <MdOutlineArrowBack className=" text-gray-50 hover:text-gray-300 hover:scale-105 duration-200  " size="32"></MdOutlineArrowBack>
                </Link>
        </div>
    );
}