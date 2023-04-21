import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [currentMusicId, setCurrentMusicId] = useState(null);
  function test(props) {
    console.log("test");
    setCurrentMusicId(1);
  }
  return (
    <MusicContext.Provider value={[currentMusicId, setCurrentMusicId]}>
      {props.children}
    </MusicContext.Provider>
  );
};
