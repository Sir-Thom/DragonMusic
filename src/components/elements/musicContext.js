import React, { createContext, useState } from "react";

export const MusicContext = React.createContext();

export const MusicProvider = (props) => {
  const [currentMusicId, setCurrentMusicId] = useState();

  return (
    <MusicContext.Provider value={{currentMusicId}}>
      {props.children}
    </MusicContext.Provider>
  );
};
