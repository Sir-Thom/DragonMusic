import React, { useState } from "react";

import { ImPlay2, ImPause } from "react-icons/im";

function BouttonJouerMusique() {
  const [selectedIcon, setSelectedIcon] = useState(1);

  function Play() {
    setSelectedIcon(selectedIcon === 1 ? 2 : 1);
  }

  return (
    <button
      onClick={Play}
      className="  bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 duration-300 transform-gpu transition ease-in-out delay-150"
    >
      {selectedIcon === 1 ? <ImPlay2 /> : <ImPause />}
    </button>
  );
}

export default BouttonJouerMusique;
