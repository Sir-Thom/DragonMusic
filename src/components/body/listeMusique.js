import React, { Fragment ,useState} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
const musiques = require("../data/musique.json");
export default function ListeDeMusique(){
    return (
      <div className="grid grid-cols-1 pt-10 mb-12 shadow-lg  font-Ubuntu  pb-96 bg-cod-gray-500  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {musiques.map((musique, index) => (
          <div key={index} className="rounded  overflow-hidden shadow-lg">
            <img
              src={musique.image}//"../../asset/goofy_dragon.png"
              width={150}
              alt={musique.nomMusique}
              className="object-contain w-full"
            />
           
            <div className="font-Ubuntu  bg-cod-gray-400  px-6 py-4">
              <p className="font-Ubuntu  text-white font-bold text-xl mb-2">{musique.nomMusique}</p>
              <div className="flex justify-between py-1 ">
              <p className=" justify-end font-Ubuntu text-white text-sm">{musique.auteur} </p>
              <p className="font-Ubuntu text-white text-right text-md">{musique.duree}</p>
              </div>
              <div className="flex justify-end mt-4 ">
              <BouttonJouerMusique className=" mt-2 left-auto  items-end"></BouttonJouerMusique>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    );}

