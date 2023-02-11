import React from 'react';
import  "./Searchbar.css";
import Slider from './slider';
export default function Card(){
    return(
    <div className="flex justify-center">
  <div className="rounded-lg shadow-lg   h-auto bg-cod-gray-500 max-w-sm">
   
    <div className="p-6">
      <h5 className=" inline-block text-white text-xl font-semibold mb-2">Card title
    
      </h5>
      <p className="text-whitetext-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
        
     <Slider></Slider>
      <button type="button" className='inline-block inset-x-full  items-end px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Button</button>
    </div>
  </div>
</div>
    )
}