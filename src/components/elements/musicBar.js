import React, { useState } from "react";
import {BsPlayCircleFill,BsSkipStartCircleFill ,BsSkipEndCircleFill} from "react-icons/bs"

function ConvertTime(timestamp)
{
  let minutes = Math.floor(timestamp / 60);
  let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
}

function MusicBar(props){
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  
    console.log(props.idMusique);
  
  const date = new Date(0);
date.setSeconds(currentTime);
const timeString = date.toISOString().substr(14, 5);
console.log(timeString)
  return (
    <nav className="isolate h-20 absolute right-0 bottom-0 w-full rounded-tl-lg rounded-trt-lg  bg-cod-gray-700">
    <div className=" block h-1 w-full ">
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => setCurrentTime(e.target.value)}
        className="range range-xs range-primary h-1/4 mt-1 "
      />
 <p className="text-white text-sm  ml-2">{timeString}</p>    
 </div>
 
    <div className="flex justify-center  items-center text-xs font-semibold text-gray-500 px-4 py-3">
      <div className="space-x-3 p-2">
        <button onClick={() => { alert("previous") }} className="focus:outline-none">
          <BsSkipStartCircleFill className=" relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out " size={30}></BsSkipStartCircleFill>
        </button>
        <button onClick={() => { alert("play") }} className="snap-center items-center focus:outline-none">
          <BsPlayCircleFill className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out " size={35}></BsPlayCircleFill>
        </button>
        <button onClick={() => { alert("next") }} className="focus:outline-none">
          <BsSkipEndCircleFill size={30} className="relative hover:scale-110 duration-300 focus:outline-none text-violet-600"></BsSkipEndCircleFill>
        </button>
      </div>
    </div>
  </nav>
  
  );
};

export default MusicBar;