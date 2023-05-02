import React, { createContext, useState } from "react";

export const MusicContext = createContext([{}, () => {}]);

export const MusicProvider = (props) => {
  const [currentMusicId, setCurrentMusicId] = useState();
  const [Musics, setMusics] = useState({});
  const [musicTime, setMusicTime] = useState();

  return (
    <MusicContext.Provider
      value={[
        currentMusicId,
        setCurrentMusicId,
        Musics,
        setMusics,
        musicTime,
        setMusicTime,
      ]}
    >
      {props.children}
    </MusicContext.Provider>
  );
};
