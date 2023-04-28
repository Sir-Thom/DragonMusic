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
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [countMusic, setCountMusic] = useState(0);
  const loadData = () => {
    // Call your API to get data with the current page and limit
    fetch(`https://localhost:7246/Music?page=${page}&limit=${8}`, {
      mode: "cors",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the state with new data
        setMusics((prevMusics) => [...prevMusics, ...data]);
        // Check if there's more data to be loaded
        if (data.length !== countMusic) {
          setHasMore(false);
        }
        //setHasMore(data.length > 0);
        // Increment the page number
        setPage(page + 1);
      })
      .catch((error) => console.log(error));
  };

  const CountData = () => {
    // Call your API to get data with the current page and limit
    fetch(`https://localhost:7246/Music/Count`, {
      mode: "cors",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Update the state with new data
        setCountMusic(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadData();
    CountData();
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
          <StockListWithSearch
            data={musics}
            fetch={loadData}
            count={countMusic}
          />
        </div>
        <div className=" mb-8">
          <MusicBar />
        </div>
      </div>
    </MusicProvider>
  );
}

export default Body;
