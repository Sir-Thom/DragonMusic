import React, { useState } from "react";

import { ImPlay2,ImPause } from "react-icons/im";

function BouttonJouerMusique(){
    const [selectedIcon, setSelectedIcon] = useState(1);
  
    function switchIcon() {
        setSelectedIcon(selectedIcon === 1 ? 2 : 1);
    };
  

    return (
      <button onClick={switchIcon}
                
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
     
        {selectedIcon === 1 ? (
          <ImPlay2  />
        ) : (
          <ImPause />
        )}
         </button>
      
    );
  };
  
  export default BouttonJouerMusique;