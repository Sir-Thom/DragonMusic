import React, { useState,useEffect } from 'react';

function MusicCard({ title, artist, cover,duration })  {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(null);
title="fkdsl";
artist="dfjksl";

useEffect(() => {
    if (isPlaying) {
      const newTimer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimer(newTimer);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);
    
  function handlePlayPause ()  {
    setIsPlaying(!isPlaying);
  };
  const remainingTime = duration - currentTime;
  return (
    <div className="max-w-sm  w-sm rounded overflow-hidden shadow-lg">
      <img src={cover} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">{artist}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        {isPlaying && (
          <p className="text-gray-700 text-base mt-2">
            Remaining Time: {remainingTime}s
          </p>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
