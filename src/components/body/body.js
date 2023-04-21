import { React,useState, useEffect } from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import MusicBar from '../elements/musicBar';
import StockMusique from "../body/listeMusique";
import SearchBar from '../elements/SearchBar';
import play from '../elements/boutonJouerMusique';
const stocks = require("../data/musique.json");

/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/


const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

function Body(){
  const [musics, setMusics] = useState([]);
  const [musicQuiJoue, setMusicQuiJoue] = useState("1");

  const loadData = async () =>{
    fetch("https://localhost:7246/Music", {
      mode: 'cors',
      method: 'GET'
    })
    .then((response) => 
      response.json()
    )
    .then((data) => 
      setMusics(data)
    )
  };
  useEffect(() => {
    loadData();
  }, []);

  return(
<div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
      <div className=" mb-8">
        <StockListWithSearch data={musics} musicAJouer={musicQuiJoue}/>
      </div>

      <div  className=" mb-8"> <MusicBar data={loadData} idMusique={play()} /></div>
    </div>
  );
}

export default Body;

  
