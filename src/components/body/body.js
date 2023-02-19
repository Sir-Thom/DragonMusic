import React from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import MusicBar from '../elements/musicBar';
import StockMusique from "../body/listeMusique";
import withSearch from '../elements/SearchBarTest';
const stocks = require("../data/musique.json");
/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/


const StockListWithSearch = withSearch(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

function Body(){
  return(
<div className=" overflow-y-scroll gradiant">
      <div className=" mb-8">
        <StockListWithSearch data={stocks}/>
      </div>
      <div  className=" mb-8"> <MusicBar /></div>
    </div>
  );
}

export default Body;

  
