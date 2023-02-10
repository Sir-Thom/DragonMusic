import React, { useState } from 'react';
import  "./Searchbar.css";
import {ImSearch} from 'react-icons/im'

export default  function SearchBar(){
    return(
        <div className=' flex '>
        <input type={"search"} className="form-control rounded-full sm:w-36 md:w-76 lg:w-96 justify-items-end flex-row flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700  border-l-indigo-600 focus:bg-white focus:border-indigo-600 focus:outline-indigo-600" 
                    placeholder="Search" aria-label="Search" aria-describedby="button-addon3"></input>
        <button className=" inline-block ms-auto px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                                    type="button" id="button-addon3">
          <ImSearch size={15} />
        </button>
      </div>
    )
}
