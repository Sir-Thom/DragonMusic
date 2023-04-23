import React from "react";

function Music(props) {
  //console.log("la musique à jouer: " + props.audioFile);
  return (
    <audio
      id={"audio" + props.idMusique}
      src={props.audioFile}
      className="hidden"
      preload="auto"
    />
  );
}

export default Music;
