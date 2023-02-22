import React from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import MusicBar from '../elements/musicBar';
import StockMusique from "../body/listeMusique";
import SearchBar from '../elements/SearchBar';
const stocks = require("../data/musique.json");
/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/


const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

function Body(){
  return(
<div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
      <div className=" mb-8">
        <StockListWithSearch data={stocks}/>
      </div>

      <div  className=" mb-8"> <MusicBar /></div>
    </div>
  );
}

export default Body;

  
