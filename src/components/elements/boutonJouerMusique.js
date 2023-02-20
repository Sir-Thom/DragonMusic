import React, { useState } from "react";
import { ImPlay2, ImPause } from "react-icons/im";

function BouttonJouerMusique() {
  const [CasePlayStop, setSelectedIcon] = useState(1);

  function Play(e) {
    e.preventDefault();
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    if(CasePlayStop===1){
     // musiques.nomMusique;
     alert("play musique");
    }else if(CasePlayStop===2){
      alert("stop musique"); 
    }
  }

  return (
    <button
      onClick={(e) => Play(e)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}

    </button>
  );
}

export default BouttonJouerMusique;
