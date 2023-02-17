import React, { useState } from "react";
import "./NavbarComp.css";
import logo from "../../logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../elements/SearchBar";


import {Link} from "react-router-dom";
function Navigation() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex font-Ubuntu  justify-center  justify-items-center shadow-xl  item-center  bg-cod-gray-800   py-4 ">
      <div className=" max-w-full container  ms-auto   bg-cod-gray-800 text-white">
        <div className="flex items-center my-auto pr-4 justify-between">
          <div className="inline-flex text-xs text-clip  items-center ">
            <img className="h-[6vh] w-[6vw] " src={logo} alt="Logo" />
            <a href="/#"
              className="font-bold text-xs lg:text-xl items-center no-underline hover:text-gray-50 "
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
          }  transform-gpu duration-500 ease-in-out rounded max-h-full transition-transform mt-2 bg-cod-gray-600 py-4`}
          >

              <Link className="block rounded-lg transition  ease-in-out duration-500 font-semibold px-4 py-2 text-lg text-white hover:bg-cod-gray-100" to="/"> 
                Accueil
              </Link>
              <Link to="/" className=" block rounded-lg transition  ease-in-out duration-500 font-semibold px-4 py-2 text-lg text-white hover:bg-cod-gray-100">
                Bibliothèque
              </Link>
              <Link to="/connexion" className="block rounded-lg transition  ease-in-out duration-500 font-semibold px-4 py-2 text-lg text-white hover:bg-cod-gray-100   ">
                Connexion
              </Link>
            <Link to="/inscription" className="block rounded-lg transition  ease-in-out duration-500 font-semibold px-4 py-2 text-lg text-white hover:bg-cod-gray-100 ">
                Inscription
              </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
