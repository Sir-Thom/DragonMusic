import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import goofy_dragon from "../../asset/goofy_dragon.png";
const musiques = require('../data/musique.json');

export default function ListeDeMusique(){
    return (
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {musiques.map((musique, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg">
          <img src={musique.image} alt={musique.nomMusique} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{musique.nomMusique}</div>
            <p className="text-gray-700 text-base">{musique.auteur}</p>
            <p className="text-gray-700 text-base">{musique.duree}</p>
            <BouttonJouerMusique />
          </div>
        </div>
      ))}
    </div>
     
    );}


