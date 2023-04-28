import React, { useState, useContext, useEffect } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import Music from "./music";
import { MusicContext } from "./musicContext";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);
  const [currentMusicId, setCurrentMusicId, Musics, setMusics] =
    useContext(MusicContext);

  useEffect(() => {
    const loadMusiqueChoisi = async () => {
      await fetch("https://localhost:7246/Music/" + props.idMusique, {
        mode: "cors",
        method: "GET",
      })
        .then((response) => response.json())
        .then((music) => {
          setCurrentMusicId(music.id);
          localStorage.setItem("idMusique", music.id);
          setMusics(music.musicFile);
        });
    };

    loadMusiqueChoisi();
  }, []);

  function Play(e, idMusique) {
    e.preventDefault();

    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio" + idMusique);
    if (CasePlayStop === 1) {
      audio.play();
    } else if (CasePlayStop === 2) {
      audio.pause();
    }
  }

  return (
    <button
      onClick={(e) => Play(e, props.idMusique)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}
      <Music idMusique={props.idMusique} audioFile={Musics} />
    </button>
  );
}

export default BouttonJouerMusique;
