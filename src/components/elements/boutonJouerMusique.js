import React, { useState, useContext } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import Music from "./music";
import MusicBar from "./musicBar";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);
  const [data, setData] = useState("");
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
      setData(music);
      
    }
    )
  };
  /*useEffect(() => {
    loadMusiqueChoisi();
  }, []);*/

  

  //useContext(MusicContext);
  //  console.log("id dans button: " + useContext(MusicContext));
  function Play(e, idMusique) {
    e.preventDefault();
    setSelectedIcon(CasePlayStop === 1 ? 2 : 1);
    const audio = document.getElementById("audio" + idMusique);
    if (CasePlayStop === 1) {
      audio.play();
      localStorage.setItem("idMusique", props.idMusique);

      //vont ensemble
      loadMusiqueChoisi();
      alert(data.nomMusique);
    //  alert(props.musiqueAJouer);
    } else if (CasePlayStop === 2) {
      audio.pause();
      alert(props.idMusique);
    }
  }

  return (
    <button onLoad={loadMusiqueChoisi()}
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
