import React from 'react';
import  "./Searchbar.css";



export default function Slider(props){
    return(
        <><label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label><input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
        </input></>


    )
}
