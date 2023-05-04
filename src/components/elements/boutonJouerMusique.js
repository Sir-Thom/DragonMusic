import React, { useState, useContext, useEffect } from "react";
import { ImPlay2, ImPause } from "react-icons/im";
import Music from "./music";
import { MusicContext } from "./musicContext";

function BouttonJouerMusique(props) {
  const [CasePlayStop, setSelectedIcon] = useState(1);
  // const [currentMusicId, setCurrentMusicId] = useState(MusicContext);
  const [
    currentMusicId,
    setCurrentMusicId,
    Musics,
    setMusics,
    autoPlay,
    setAutoplay,
  ] = useContext(MusicContext);
  const [musicId, setMusicId] = useState(0);

  /*const loadAllmusic = async () => {
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
};*/

  const loadMusiqueChoisi = async () => {
    await fetch(process.env.REACT_APP_API_URL + "/Music/" + props.idMusique, {
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

  useEffect(() => {
    const loadMusiqueChoisi = async () => {
      await fetch(process.env.REACT_APP_API_URL + "/Music/" + props.idMusique, {
        mode: "cors",
        method: "GET",
      })
        .then((response) => response.json())
        .then((music) => {
          setAutoplay(true);
          setCurrentMusicId(music.id);
          setMusics(music.musicFile);
        });
    };
    loadMusiqueChoisi();
  }, []);

  const Play = async (e, idMusique) => {
    e.preventDefault();
    //const audio = document.getElementById("audio" + idMusique);

    await loadMusiqueChoisi();
    setAutoplay(true);

    //setSelectedIcon(CasePlayStop === 1 ? 2 : 1);

    //console.log(audio);

    //alert(props.idMusique);
    /*  if (audio !== undefined) {
      if (CasePlayStop === 1) {
        audio.play();
      } else if (CasePlayStop === 2) {
        audio.pause();
      }
    }*/
  };

  //console.log(Musics)
  return (
    <button
      onLoad={loadMusiqueChoisi}
      onClick={(e) => Play(e, props.idMusique)}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {<ImPlay2 />}
    </button>
  );
}

export default BouttonJouerMusique;
