import React from 'react';
//import { Card,Stack } from 'react-bootstrap';
import './body.css'
import Card from '../elements/card';
import MusicCard from '../elements/musicCard';
import ListeDeMusique from './listeMusique';
/*import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';*/
function Body(){
  return(
  <div  className='body gradiant grid'>
  <div className=" grid-rows-2">
   <ListeDeMusique></ListeDeMusique>
   </div>


  </div>




  );
}

export default Body;

  
