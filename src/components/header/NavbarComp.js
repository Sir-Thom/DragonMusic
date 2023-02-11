import React, { useState } from "react";
import "./NavbarComp.css";
import logo from "../../asset/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../elements/SearchBar";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex font-Ubuntu items-end shadow-md shadow-cod-gray  bg-cod-gray-600  rounded-br-lg p-4 rounded-bl">
      <div className=" max-w-full container  mx-0 text-white">
        <div className="flex items-center ms-auto pr-4 justify-between">
          <div className="flex text-lg  items-center ">
            <img className="h-[6vh] w-[6vw]" src={logo} alt="Logo" />
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
              <button className=" px-4 py-2 text-white hover:hover:bg-cod-gray-100">
                Accueil
              </button>
            </div>
            <div className="block transition  ease-in-out   duration-500 rounded-lg font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
              <button className=" px-4 py-2 text-white ">
                bibi
              </button>
            </div>
            <div className="block rounded-lg transition  ease-in-out duration-500 font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
              <button className=" px-4 py-2 text-white">
                Connexion
              </button>
            </div>
            <div className="block rounded-lg transition  ease-in-out  duration-500 font-semibold p-2 text-lg text-white hover:hover:bg-cod-gray-100">
              <button className=" px-4 py-2 text-white">
                Inscription
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
