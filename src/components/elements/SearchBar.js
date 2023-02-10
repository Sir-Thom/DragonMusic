import React, { useState } from 'react';
import  "./Searchbar.css";
import {ImSearch} from 'react-icons/im'

export default  function SearchBar(){
    return(
        <div className='flex '>
        <input type="search" className="form-control justify-items-end flex-row flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                    placeholder="Search" aria-label="Search" aria-describedby="button-addon3"></input>
        <button className=" inline-block ms-auto px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                                    type="button" id="button-addon3">
          <ImSearch size={15} />
        </button>
      </div>
    )
}
