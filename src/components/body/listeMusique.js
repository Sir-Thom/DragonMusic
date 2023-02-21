import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
const musiques = require("../data/musique.json");
export default function ListeDeMusique(){
    return (
      <div className="grid grid-cols-1 pt-10 mb-12 pb-96 bg-cod-gray-500  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {musiques.map((musique, index) => (
          <div key={index} id={index} className="rounded overflow-hidden shadow-lg">
            <img
              src={musique.image}//"../../asset/goofy_dragon.png"
              width={150}
              alt={musique.nomMusique}
              className="object-contain w-full"
            />
           
            <div className="block bg-cod-gray-400  px-6 py-4">
              <p className="text-white font-bold text-xl mb-2">{musique.nomMusique}</p>
              <p className="text-white text-base">{musique.auteur}</p>
              <p className="text-white text-base">{musique.duree}</p>
              <BouttonJouerMusique className="" idMusique={index}></BouttonJouerMusique>
            </div>
            
          </div>
        ))}
      </div>
    );}

