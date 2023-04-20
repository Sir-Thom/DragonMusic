import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [currentMusicId, setCurrentMusicId] = useState(null);

  return (
    <MusicContext.Provider value={[currentMusicId, setCurrentMusicId]}>
      {props.children}
    </MusicContext.Provider>
  );
};