import React, { useState,useEffect} from "react";
import { ImPlay2, ImPause } from "react-icons/im";  
import Music from "./musicBar";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);
  const [data, setData] = useState("");
  const loadMusiqueChoisi = async () =>{
    await fetch("https://localhost:7246/Music/1"/*(props.idMusique)*/, {
      mode: 'cors',
      method: 'GET'
    })
    .then((response) => 
      response.json()
    )
    .then((music) => {
      setData(music);
    }
    )
  };
  /*useEffect(() => {
    loadMusiqueChoisi();
  }, []);*/

  function Play(e, idMusique) {
    e.preventDefault();
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio");
    if (CasePlayStop === 1) {
     // audio.play();
     loadMusiqueChoisi();
      alert(data.nomMusique);
    } else if (CasePlayStop === 2) {
      //audio.pause();
      alert(props.idMusique);
    }
  }
  

  return (
    <button
      onClick={(e) => Play(e,props.id)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
     
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}

    </button>
  );
}

export default BouttonJouerMusique;
