import { React, useState, useEffect, useContext, useRef } from "react";
import "./body.css";
import StockMusique from "../body/listeMusique";
import SearchBar from "../elements/SearchBar";
import { MusicContext, MusicProvider } from "../elements/musicContext";
import { motion } from "framer-motion";
import {
  BsSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
  BsFillVolumeDownFill,
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";


const stocks = require("../data/musique.json");

const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

// début partie musicbar

function MusicBars({ src }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [FirstCall,setFistCall] = useState(0);
  const [
    currentMusicId,
    setCurrentMusicId,
    Musics,
    setMusics,
    musicTime,
    setMusicTime,
    autoPlay, 
    setAutoplay
  ] = useContext(MusicContext);
  const [volume, setVolume] = useState(1);
  useEffect(() => {

   const audio = audioRef.current;
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (progressBarRef.current) {
      progressBarRef.current.style.width = `${
        (audio.currentTime / duration) * 100
      }%`;
      }
    };
    const onLoadedMetadata = () => {
      setAutoplay(true);
      setDuration(audio.duration);
    };
    setCurrentMusicId(null);

    
    const onPlay = () => { 
      setAutoplay(true);
      setIsPlaying(true);
    };
    
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
    };
    setMusics(NaN);
  }, [duration]);


  const handlePlayPauseClick = async() => {
    if (isPlaying == true) {
      audioRef.current.pause();
      setIsPlaying(false);
    } 
    else {
      if (audioRef.current.src.includes("[object%20Object]")) {
        //console.log("aucune musique n'est selectionné ou elle n'a pas de source");
        return;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };
  const handlePreviousClick = () => {
    audioRef.current.currentTime = 0;
  };

  const handleNextClick = () => {
    audioRef.current.currentTime = duration;
 //   setMusics(Musics.id+1);
  };
  const handleMuteClick = () => {
    const newVolume = volume === 0 ? 1 : 0;
    if (newVolume <= 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };
  const buttonVariants = {
    active: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleProgressBarChange = (event) => {
    const newCurrentTime = event.target.value;
    audioRef.current.currentTime = newCurrentTime;
    setCurrentTime(newCurrentTime);
  };


  return (
    <nav className="fixed bottom-0 w-full rounded-tl-lg rounded-trt-lg  bg-cod-gray-700 text-white p-2">
      <audio autoPlay={autoPlay} ref={audioRef} src={Musics} controls={false} />
      <div className="flex justify-center items-center space-x-4">
        <motion.div className="flex justify-center items-center space-x-4">
          <motion.button
            onClick={handlePreviousClick}
            variants={buttonVariants}
            whileHover="active"
            whileTap="active"
          >
            <BsSkipStartCircleFill
              size={30}
              className="relative hover:scale-110 duration-300 focus:outline-none text-violet-600"
            />
          </motion.button>
          <motion.button
            onClick={handlePlayPauseClick}
            variants={buttonVariants}
            whileHover="active"
            whileTap="active"
          >
            {isPlaying ? (
              <BsPauseCircleFill
                size={35}
                className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
              />
            ) : (
              <BsPlayCircleFill
                size={35}
                className="relative text-violet-600 hover:scale-110 duration-300 transform-gpu transition ease-in-out "
              />
            )}
          </motion.button>
          <motion.button
            onClick={handleNextClick}
            variants={buttonVariants}
            whileHover="active"
            whileTap="active"
          >
            <BsSkipEndCircleFill
              className="relative hover:scale-110 duration-300 focus:outline-none text-violet-600"
              size={30}
            />
          </motion.button>
        </motion.div>
      </div>
      <div className="flex relative justify-between mx-4">
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <div className="flex relative items-center w-[30%]">
          <div className="-mx-2 mr-1" onClick={handleMuteClick}>
            {isMuted ? (
              <BsFillVolumeMuteFill size={20} />
            ) : (
              <BsFillVolumeUpFill size={20} />
            )}
          </div>

          <input
            type="range"
            className="w-full range range-xs range-primary mx-1 h-[5px]"
            min="0"
            max="1"
            step="0.1"
            value={audioRef.current ? audioRef.current.volume : 0}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.volume = e.target.value;
              }
            }}
          />
        </div>
      </div>
      <input
        type="range"
        className="w-[65%] range range-xs range-primary mb-10"
        min="0"
        max={duration}
        step="0.01"
        value={currentTime}
        onChange={handleProgressBarChange}
      />
    </nav>
  );
}

// fin  partie musicbar
function Body() {
  const [musics, setMusic] = useState([]);

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
      .then((musics) => setMusic(musics))
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  const [
    currentMusicId,
    setCurrentMusicId,
    Musics,
    setMusics,
    musicTime,
    setMusicTime,
  ] = useContext(MusicContext);
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
          <StockListWithSearch data={musics} />
        </div>
        <div className=" mb-8">
          <MusicBars />
        </div>
      </div>
    </MusicProvider>
  );
}
export default Body;
