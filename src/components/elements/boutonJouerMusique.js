import React, { useState, useContext } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import Music from "./music";
import { MusicContext } from "./musicContext";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);

  const [currentMusicId, setCurrentMusicId, Musics, setMusics] =
    useContext(MusicContext);

  //

  const audioFiles = (e) => {
    switch (e) {
      case 1:
        return "/asset/music/Hamburger Cheeseburger Big Mac Whopper (Full Version).mp3";
      case 2:
        return "/asset/music/Hank steel the real queer cowboy.mp3";
      case 3:
        return "/asset/music/Enormous Penis.mp3";
      default:
        return "/asset/Hamburger Cheeseburger Big Mac Whopper (Full Version).mp3";
    }
  };

  const loadMusiqueChoisi = async () => {
    await fetch("https://localhost:7246/Music/" + props.idMusique, {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((music) => {
        setCurrentMusicId(music.id);
        // console.log(music);
        //  setMusics((Musics) => (Musics = music.musicFile));
        //console.log(music.id);
      });
  };

  function Play(e, idMusique) {
    e.preventDefault();
    loadMusiqueChoisi();

    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio" + idMusique);

    //alert(props.idMusique);
    if (CasePlayStop === 1) {
      audio.play();
      // alert( currentMusicId );
    } else if (CasePlayStop === 2) {
      audio.pause();
    }
  }

  console.log(Musics);
  return (
    <button
      onLoad={loadMusiqueChoisi}
      onClick={(e) => Play(e, props.idMusique)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {console.log(Musics)}
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}
      <Music idMusique={props.idMusique} audioFile={Musics} />
    </button>
  );
}

export default BouttonJouerMusique;
