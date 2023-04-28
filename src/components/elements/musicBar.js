import React, { useState, useContext, useEffect } from "react";
import { MusicContext } from "./musicContext";
import {
  BsPlayCircleFill,
  BsSkipStartCircleFill,
  BsSkipEndCircleFill,
} from "react-icons/bs";

function ConvertTime(timestamp) {
  let minutes = Math.floor(timestamp / 60);
  let seconds = timestamp - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timestamp = minutes + ":" + seconds;
  return timestamp;
}
function Play(e, idMusique) {
  debugger;
  e.preventDefault();
  const [CasePlayStop, setSelectedIcon] = useState(1);
  setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
  const audio = document.getElementById(
    "audio" + localStorage.getItem("idMusique")
  );
  if (CasePlayStop === 1) {
    audio.play();
  } else if (CasePlayStop === 2) {
    audio.pause();
  }
}
function MusicBar(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [currentMusicId, setCurrentMusicId, Musics, setMusics] =
    useContext(MusicContext);
  const date = new Date(0);
  date.setSeconds(currentTime);
  const timeString = date.toISOString().substr(14, 5);
  console.log("musics " + localStorage.getItem("idMusique"));
  const loadMusiqueChoisi = async () => {
    await fetch(
      "https://localhost:7246/Music/" + localStorage.getItem("idMusique"),
      {
        mode: "cors",
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((music) => {
        setCurrentMusicId(music.id);
        // put all music file in Musics

        setMusics(music.musicFile);
        console.log("musics " + Musics);
      });
  };

  return (
    <nav className="isolate h-20 absolute right-0 bottom-0 w-full rounded-tl-lg rounded-trt-lg  bg-cod-gray-700">
      <div className=" block h-1 w-full ">
        <input
          type="range"
          min={0}
          max={100}
          value={currentTime}
          onChange={(e) => setCurrentTime(e.target.value)}
          className="range range-xs range-primary h-1/4 mt-1 "
        />
        <p className="text-white text-sm  ml-2">{timeString}</p>
      </div>

      <div className="flex justify-center  items-center text-xs font-semibold text-gray-500 px-4 py-3">
        <div className="space-x-3 p-2">
          <button
            onClick={() => {
              alert("previous");
            }}
            className="focus:outline-none"
          >
            <BsSkipStartCircleFill
              className=" relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
              size={30}
            ></BsSkipStartCircleFill>
          </button>
          <button
            id={"audio" + localStorage.getItem("idMusique")}
            onClick={console.log(localStorage.getItem("idMusique"))}
            className="snap-center items-center focus:outline-none"
          >
            <BsPlayCircleFill
              className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
              size={35}
            ></BsPlayCircleFill>
          </button>
          <button
            onClick={() => {
              alert("next");
            }}
            className="focus:outline-none"
          >
            <BsSkipEndCircleFill
              size={30}
              className="relative hover:scale-110 duration-300 focus:outline-none text-violet-600"
            ></BsSkipEndCircleFill>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MusicBar;
