import React from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import MusicBar from '../elements/musicBar';
import StockMusique from "../body/listeMusique";
import SearchBar from '../elements/SearchBar';
import { useState, useEffect } from 'react';
/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/


const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.toUpperCase().indexOf(searchTerm) >= 0;
});

function Body(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const loadData = async () =>{
    fetch("https://localhost:7246/Music", {
      mode: 'cors',
      method: 'GET'
    })
    .then((response) => {
      if (!response.ok) {
        throw Error("Failed to fetch data");
      }
      else{
      setError(null);
      return response.json();
    }})
    .then((data) => 
      setData(data)
    )
    .catch((error) => {
      setError(error.message);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return(
<div className="h-screen w-screen  overflow-y-scroll  bg-gradient-to-t  from-cod-gray to-cod-gray-800">
  <h3 className="text-red-800 font-bold m-8 text-5xl" style={{display: error == null ? 'none' : 'block' }}>{error}</h3>
      <div className=" mb-8">
        
        <StockListWithSearch data={data}/>
      </div>

      <div  className=" mb-8"> <MusicBar /></div>
    </div>
  );
}

export default Body;

  
