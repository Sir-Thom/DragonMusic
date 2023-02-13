import React, { useState } from "react";
import {ImPlay2,ImNext ,ImPrevious} from "react-icons/im"


function MusicBar(){
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  
  const date = new Date(0);
date.setSeconds(currentTime);
const timeString = date.toISOString().substr(11, 8);
console.log(timeString)
  return (
    <nav className="fixed bottom-0 w-full rounded bg-gray-800 p-2">
    <div class="relative block h-1 w-full ">
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => setCurrentTime(e.target.value)}
        className=" inline-block w-full bg-gray-700"
      />
      <p className="text-white text-sm">{timeString}</p>
    </div>
  
    <div className="flex justify-center items-center text-xs font-semibold text-gray-500 px-4 py-3">
      <div className="space-x-3 p-2">
        <button onClick={() => { alert("previous") }} className="focus:outline-none">
          <ImPrevious className="relative text-white" size={30}></ImPrevious>
        </button>
        <button onClick={() => { alert("play") }} className="focus:outline-none">
          <ImPlay2 className="relative text-white" size={35}></ImPlay2>
        </button>
        <button onClick={() => { alert("next") }} className="focus:outline-none">
          <ImNext size={30} className="relative focus:outline-none text-white"></ImNext>
        </button>
      </div>
    </div>
  </nav>
  
  );
};

export default MusicBar;