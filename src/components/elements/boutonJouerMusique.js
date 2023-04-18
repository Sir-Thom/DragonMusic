import React, { useState } from "react";
import { ImPlay2, ImPause } from "react-icons/im";  
import Music from "./musicBar";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);

  function Play(e, idMusique) {
    e.preventDefault();
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio");
    if (CasePlayStop === 1) {
     // audio.play();
      alert(props.idMusique);
    } else if (CasePlayStop === 2) {
      //audio.pause();
      alert(props.idMusique);
    }
  }
  

  return (
    <button
      onClick={(e) => Play(e,props.idMusique)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
     
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}

    </button>
  );
}

export default BouttonJouerMusique;
