import React, { createContext, useState } from "react";

export const MusicContext = createContext([{}, () => {}]);

export const MusicProvider = (props) => {
  const [currentMusicId, setCurrentMusicId] =  useState({id:0});
  const [Musics, setMusics] =  useState({});

  return (
    <MusicContext.Provider value={[currentMusicId, setCurrentMusicId,Musics,setMusics]}>
      {props.children}
    </MusicContext.Provider>
  );
};
