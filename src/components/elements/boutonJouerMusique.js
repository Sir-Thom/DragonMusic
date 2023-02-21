import React, { useState } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
const musiques = require('../data/musique.json');

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);

  function Play(idMusique) {
    
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    if(CasePlayStop===1){
      alert(idMusique);
    }else if(CasePlayStop===2){
      alert("stop musique"); 
    }
  }

  return (
    <button
      onClick={() =>Play(props.idMusique)}
      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {CasePlayStop === 1 ? <ImPlay2 /> : <ImPause />}

    </button>
  );
}

export default BouttonJouerMusique;
