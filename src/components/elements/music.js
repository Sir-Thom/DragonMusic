import React, { useState } from "react";

function Music(props) {
  const [musicToPlay, setMusicToPlay] = useState("");

  function getMusic(){
    const loadMusiqueChoisi = async () => {
      await fetch("https://localhost:7246/Music/" + props.idMusique, {
        mode: "cors",
        method: "GET",
      })
        .then((response) => response.json())
        .then((music) => {
          setMusicToPlay(music.musicFile);
        });
    };

    loadMusiqueChoisi();

    return musicToPlay;
}
  //console.log("la musique à jouer: " + props.audioFile);

  return (
    <audio
      id={"audio" + props.idMusique}
      src={getMusic()}
      crossOrigin="anonymous"
      className="hidden"
      preload="auto"
    />
  );
}

export default Music;
