import React from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import Card from '../elements/card';
import MusicCard from '../elements/musicCard';
import ListeDeMusique from './listeMusique';
import MusicBar from '../elements/musicBar';
/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/
function Body(){
  return(
<div className=" overflow-y-scroll gradiant">
      <div className=" mb-8">
        <ListeDeMusique />
        
      </div>
      
      
      <div  className=" mb-8"> <MusicBar /></div>
    </div>
    
   



  );
}

export default Body;

  
