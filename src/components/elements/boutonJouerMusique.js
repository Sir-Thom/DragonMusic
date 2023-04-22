import React, { useState, useContext } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import Music from "./music";
import { MusicContext } from "./musicContext";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);
  const { currentMusicId, setCurrentMusicId } = useContext(MusicContext);
  const audioFiles = {
    1: "/asset/Hamburger Cheeseburger Big Mac Whopper (Full Version).mp3",
    2: "audio-file2.mp3",
    3: "audio-file3.mp3",
    // add more mappings as needed
  };

  const loadMusiqueChoisi = async () =>{
    await fetch("https://localhost:7246/Music/"+props.idMusique, {
      mode: 'cors',
      method: 'GET'
    })
    .then((response) => 
      response.json()
    )
    .then((music) => {
      setCurrentMusicId(music.idMusique);
      console.log(music.idMusique);
    });
  };

  function Play(e, idMusique)  {
    e.preventDefault(); 
    loadMusiqueChoisi();
    
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio" + idMusique);
    

    alert(props.idMusique);
    if (CasePlayStop === 1) {
      audio.play();
     // alert( currentMusicId );
      
      
    } else if (CasePlayStop === 2) {
      audio.pause();
    }
  }

  return (
    <button
      onLoad={loadMusiqueChoisi()}
      onClick={(e) => Play(e, props.idMusique)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}
      <Music
        idMusique={props.idMusique}
        audioFile={audioFiles[props.idMusique]}
      />
    </button>
  );
}

export default BouttonJouerMusique;
