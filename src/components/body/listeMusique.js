import React, { useCallback} from 'react';
import './listeMusique.css';
import BouttonJouerMusique from '../elements/boutonJouerMusique';

//const musiques = require("../data/musique.json");

export default function ListeDeMusique(props){
  const tabRow = useCallback(() => {
		if (props.data instanceof Array) {
			return (
      <div className="grid grid-cols-1  pt-32 mb-12 shadow-lg  font-Ubuntu  pb-96 bg-cod-gray-500  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.data.map((stock, index) => {
          return (
          <div key={index} id={index} className="rounded  overflow-hidden shadow-lg">
            <img
              src={stock.image}
              width={150}
              alt={stock.nomMusique}
              className="object-contain w-full"
            />
           
            <div className="font-Ubuntu  bg-cod-gray-400  px-6 py-4">

              <p className="font-Ubuntu  text-white font-bold text-xl mb-2">{stock.nomMusique}</p>
              <div className="flex justify-between py-1 ">
              <p className=" justify-end font-Ubuntu text-white text-sm">{stock.auteur} </p>
              <p className="font-Ubuntu text-white text-right text-md">{stock.duree}</p>
              </div>
              <div className="flex justify-end mt-4 ">
              <BouttonJouerMusique className=" mt-2 left-auto  items-end" idMusique={index}  ></BouttonJouerMusique>
            </div>
            </div>
          </div>
          )
		  })}
    </div>
    )
  }
	}, [props.data]);
console.log(props.data)
    return (
      <>{tabRow()}</>
    );
  }

