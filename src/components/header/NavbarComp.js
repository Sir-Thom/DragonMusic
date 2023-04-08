import React, { useState, Fragment, useEffect } from "react";
import "./NavbarComp.css";
import logo from "../../logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {motion}  from 'framer-motion'
const users = require("../data/users.json");
const Navigation = ({ E }) => {
  //sert a modifier le json qui vas être dans le local storage
  /*useEffect(() => {
  localStorage.setItem('IsLogged', JSON.stringify(users[1].isLogged));
}, [users[1].isLogged =true]); //avec le = true on peut changer sa valeur.
*/
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logOut() {
    users.forEach((i) => {
      if (i.isLogged === true) {
        i.isLogged = false;
      }
    });
    setIsMenuOpen(false);
  }

  function estLogger() {
    for (const i of users) {
      if (i.isLogged === true) {
        if(isMenuOpen === true){
        return (
          
          <motion.div
          className="absolute divide-y-4 divide-cod-gray-200/30   right-0  z-50 w-52 mt-2 py-2   bg-cod-gray-400  rounded-md shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >            <Link
              to="/"
              className=" flex w-full active:scale-90 h-full items-center px-4 py-2 text-white hover:bg-violet-500 rounded-md hover:text-white"
            >
              Accueil
            </Link>
            <Link
              to="/"
              className=" flex w-full h-full items-center px-4 py-2 text-white hover:bg-violet-500 rounded-md hover:text-white"
            >
              Bibliothèque
            </Link>

            <Link
              onClick={() => logOut()}
              to="/"
              className=" flex active:scale-90 items-center w-full h-full px-4 py-2 text-white hover:bg-violet-500 rounded-md hover:text-white"
            >
              Logout <BiLogOut></BiLogOut>
            </Link>
    </motion.div>        );
    
      }
    }
    }
    return (
      <motion.div
      className="absolute divide-y-4 divide-cod-gray-200/30  -mr-16  right-0  z-50 w-52 mt-2 py-2   bg-cod-gray-400  rounded-md shadow-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
        <Link
          to="/connexion"
          className=" flex w-full active:scale-90 h-full items-center px-4 py-2 text-white hover:bg-violet-500 rounded-md hover:text-white"
        >
          Connexion <BiLogIn></BiLogIn>
        </Link>
        <Link
          to="/inscription"
          className=" flex w-full h-full items-center px-4 py-2 text-white hover:bg-violet-500 rounded-md hover:text-white"
        >
          Inscription
        </Link>
      
      </motion.div>
    );
  }

  

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex font-Ubuntu space-y-4 absolute mb-7 pb-4  w-full justify-center  z-[2000] justify-items-center shadow-xl  item-center  bg-cod-gray-700   py-4 ">
      <div className=" max-w-full container  ms-auto   bg-cod-gray-700 text-white">
        <div className="flex items-center my-auto pr-4 justify-between">
          <div className="inline-flex text-xs text-clip items-center ">
            <img className="h-[6vh] w-[6vw] " src={logo} alt="Logo" />
            <a
              href="#"
              className="font-bold text-xs lg:text-xl divide-x  items-center no-underline hover:text-gray-50 "
            >
              Dragon Music
            </a>
          </div>

          <div className="px-2 ms-auto inline-flex ">
            {E}
            <div className="relative">
              <button
                className="flex items-center focus:outline-none"
                onClick={handleMenuClick}
              >
                <HiUserCircle
                  size={25}
                  className="w-10 active:scale-90 hover:border-cod-gray-100 border-2 border-transparent  rounded-full transition ease-in-out h-10 text-gray-600"
                />
              </button>
              <motion.div
                className="flex flex-col absolute z-50 mt-10 top-0 right-9 w-56 rounded-lg shadow-lg py-1 dark:bg-window-dark-700 bg-window-light-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
              {isMenuOpen && estLogger()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
