import React, { useState } from "react";
import "./NavbarComp.css";
//import logo from "../../../public/asset/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../elements/SearchBar";
import logo from "./logo.svg"

import {Link} from "react-router-dom";
function Navigation() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex font-Ubuntu  justify-center my-auto justify-items-center shadow-md shadow-cod-gray item-center  bg-cod-gray-600  rounded-br-lg py-4 rounded-bl">
      <div className=" max-w-full container  ms-auto  text-white">
        <div className="flex items-center my-auto pr-4 justify-between">
          <div className="flex text-lg  items-center ">
            <img className="h-[6vh] w-[6vw]" src={logo} />
            <a href="/#"
              className="font-bold  text-xl items-center no-underline hover:text-gray-50 "
            >
              Dragon Music
            </a>
          </div>

          <div className="px-2 ms-auto inline-flex ">
            <SearchBar></SearchBar>
            <button
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              className=" text-white pl-4 pr-0 flex items-center focus:outline-none "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose
                  className="items-center transition ease-in hover:scale-110 duration-300 menu-icon"
                  fontSize={25}
                  scale={25}
                />
              ) : (
                <AiOutlineMenu
                  className="transition items-center ease-in hover:scale-110 duration-300 menu-icon"
                  fontSize={25}
                  scale={25}
                />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div
          className={`${
            isOpen ? 'block  ' : 'hidden'
          }  transform-gpu duration-500 ease-in-out transition-transform bg-cod-gray-600 py-4`}
          >
            <div className="block rounded-lg font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">

              <Link className=" px-4 py-2 text-white " to="/"> 
                Accueil
              </Link>
            </div>
            <div className="block transition  ease-in-out   duration-500 rounded-lg font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
              <Link to="/" className=" px-4 py-2 text-white ">
                Bibliothèque
              </Link>
            </div>
            <div className="block rounded-lg transition  ease-in-out duration-500 font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
              <Link to="/connexion" className=" px-4 py-2 text-white ">
                Connexion
              </Link>
            </div>
            <div className="block rounded-lg transition  ease-in-out  duration-500 font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
            <Link to="/inscription" className="relative px-4 py-2 text-white ">
                Inscription
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
