import { React, useState, useEffect, useContext } from "react";

import "./body.css";
//import MusicBar from "../elements/musicBar";
import StockMusique from "../body/listeMusique";
import SearchBar from "../elements/SearchBar";
//import play from "../elements/boutonJouerMusique";
import { MusicContext, MusicProvider } from "../elements/musicContext";
import {
  BsPlayCircleFill,
  BsSkipStartCircleFill,
  BsPauseCircleFill,
  BsSkipEndCircleFill,
} from "react-icons/bs";

const stocks = require("../data/musique.json");

const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

// début partie musicbar

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
export function MusicBar(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [changerButtonPlay, setChangerButtonPlay] = useState(true);
  const [
    currentMusicId,
    setCurrentMusicId,
    Musics,
    setMusics,
    musicTime,
    setMusicTime,
  ] = useContext(MusicContext);
  const date = new Date(0);
  date.setSeconds(currentTime);
  const timeString = date.toISOString().substr(14, 5);
  useEffect(() => {
    const loadMusiqueChoisi = async () => {
      await fetch("https://localhost:7246/Music/" + props.idMusique, {
        mode: "cors",
        method: "GET",
      })
        .then((response) => response.json())
        .then((music) => {
          setCurrentMusicId(music.id);
          console.log(music.duree);
          //setMusics(music.musi);
          setMusicTime(music.duree);
        });
    };
  });
  console.log(musicTime);
  function changerStateButtonPLay() {
    if (changerButtonPlay === true) {
      setChangerButtonPlay(false);
    } else {
      setChangerButtonPlay(true);
    }
  }

  return (
    <nav className="isolate h-20 absolute right-0 bottom-0 w-full rounded-tl-lg rounded-trt-lg  bg-cod-gray-700">
      <div className=" block h-1 w-full ">
        <input
          type="range"
          min={0}
          max={localStorage.getItem("duration")}
          value={currentTime}
          onChange={(e) => setCurrentTime(musicTime)}
          className="range range-xs range-primary h-1/4 mt-1 "
        />
        <p className="text-white text-sm  ml-2">{}</p>
      </div>

      <div className="flex justify-center  items-center text-xs font-semibold text-gray-500 px-4 py-3">
        <div className="space-x-3 p-2">
          <button
            onClick={() => {
              alert("previous");
            }}
            className="focus:outline-none"
          >
            {}
            <BsSkipStartCircleFill
              className=" relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
              size={30}
            ></BsSkipStartCircleFill>
          </button>
          <button
            id={"audio" + localStorage.getItem("idMusique")}
            onClick={() => changerStateButtonPLay()}
            className="snap-center items-center focus:outline-none"
          >
            {changerButtonPlay === false ? (
              <BsPauseCircleFill
                className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
                size={35}
              ></BsPauseCircleFill>
            ) : (
              <BsPlayCircleFill
                className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
                size={35}
              ></BsPlayCircleFill>
            )}
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

const AudioPlayer = ({ src }) => {
  const [
    currentMusicId,
    setCurrentMusicId,
    Musics,
    setMusics,
    musicTime,
    setMusicTime,
  ] = useContext(MusicContext);
  return (
    <div className="isolate absolute block right-0 bottom-0 w-full rounded-tl-lg h-24 rounded-lg overflow-hidden">
      <audio
        src={Musics}
        controls
        className="absolute w-full h-full z-10"
      ></audio>
    </div>
  );
};

// fin  partie musicbar
function Body() {
  const [musics, setMusics] = useState([]);
  const [musicQuiJoue, setMusicQuiJoue] = useState("");
  const [error, setError] = useState(null);

  const loadData = async () => {
    fetch("https://localhost:7246/Music", {
      mode: "cors",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch data");
        } else {
          setError(null);
          return response.json();
        }
      })
      .then((musics) => setMusics(musics))
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <MusicProvider>
      <div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
        <div className=" mb-4">
          <div
            style={{ display: error == null ? "none" : "block" }}
            className="alert alert-error shadow-lg"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
          <StockListWithSearch data={musics} />
        </div>
        <div className=" mb-8">
          <AudioPlayer />
        </div>
      </div>
    </MusicProvider>
  );
}
export default Body;
