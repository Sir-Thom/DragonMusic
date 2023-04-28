import { React, useState, useEffect, useContext } from "react";
//import { Card,Stack } from 'react-bootstrap';
import "./body.css";
import MusicBar from "../elements/musicBar";
import StockMusique from "../body/listeMusique";
import SearchBar from "../elements/SearchBar";
import play from "../elements/boutonJouerMusique";
import { MusicContext, MusicProvider } from "../elements/musicContext";
const stocks = require("../data/musique.json");

/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/

const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

function Body() {
  const [musics, setMusics] = useState([]);
  const [musicQuiJoue, setMusicQuiJoue] = useState("");
  const [error, setError] = useState(null);

  const loadData = async () => {
    fetch("https://localhost:7246/Music", {
      mode: "cors",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch data");
        } else {
          setError(null);
          return response.json();
        }
      })
      .then((musics) => setMusics(musics))
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  const [currentSong, setCurrentSong] = useState(MusicContext);
  
  //console.log(data.map((stock) => stock.id));
  return (
    <MusicProvider>
      <div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
        <h3
          className="text-red-800 font-bold m-8 text-5xl"
          style={{ display: error == null ? "none" : "block" }}
        >
          {error}
        </h3>
        <div className=" mb-4">
          <StockListWithSearch data={musics} musicAJouer={musicQuiJoue} />
        </div>
        <div className=" mb-8">
          <MusicBar data={musics}/>
        </div>
      </div>
      </MusicProvider>
  );
}

export default Body;
