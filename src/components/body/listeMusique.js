import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
const musiques = require("../data/musique.json");
export default function ListeDeMusique(){
    return (
      <div className="flex gap-2 flex-shrink-0 ">
        {musiques.map((musique, index) => (
          <div key={index} className=" flex-row w-25  bg-cod-gray-600   flex rounded overflow-hidden ">
            <img
              src={musique.image}//"../../asset/goofy_dragon.png"
              width={150}
              alt={musique.nomMusique}
              className="w-partial"
            />
           
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{musique.nomMusique}</div>
              <p className="text-white text-base">{musique.auteur}</p>
              <p className="text-white text-base">{musique.duree}</p>
            </div>
            <div className="px-6 py-4">
              <BouttonJouerMusique></BouttonJouerMusique>
            </div>
          </div>
        ))}
      </div>
    );}

