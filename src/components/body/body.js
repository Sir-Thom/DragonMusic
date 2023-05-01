import { React, useState, useEffect, useContext } from "react";

import "./body.css";
import MusicBar from "../elements/musicBar";
import StockMusique from "../body/listeMusique";
import SearchBar from "../elements/SearchBar";
import play from "../elements/boutonJouerMusique";
import { MusicContext, MusicProvider } from "../elements/musicContext";
const stocks = require("../data/musique.json");

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

  return (
    <MusicProvider>
      <div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
        <div className=" mb-4">
          <div
            style={{ display: error == null ? "none" : "block" }}
            class="alert alert-error shadow-lg"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
          <StockListWithSearch data={musics} />
        </div>
        <div className=" mb-8">
          <MusicBar />
        </div>
      </div>
    </MusicProvider>
  );
}

export default Body;
