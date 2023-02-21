import React, { useState } from "react";
import {Link} from "react-router-dom";


import {BiHomeAlt} from "react-icons/bi"
export default function GoHome(){
    return (
        <div >
            <Link className="w-96 h-10 left-0 top-0  rounded-full text-violet-600" to="/"><BiHomeAlt size="32"></BiHomeAlt></Link>
        </div>
    );
}