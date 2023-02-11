import React, { useState } from "react";
import {AiOutlinePauseCircle} from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";

const BouttonJouerMusique = () => {
    const [selectedIcon, setSelectedIcon] = useState(1);
  
    const switchIcon = () => {
        setSelectedIcon(selectedIcon === 1 ? 2 : 1);
    };
  

    return (
      <div className="">
        {selectedIcon === 1 ? (
          <ImPlay2 onClick={switchIcon}/>
        ) : (
          <AiOutlinePauseCircle onClick={switchIcon}/>
        )}
        
      </div>
    );
  };
  
  export default BouttonJouerMusique;
  
/*const BOuttonJouerMusique = () => {
   const [title, setTitle] = useState("Click here");

   return <h1 onClick={() => setTitle("New title")}>{title}</h1>;
}
function click(){

}

return(
 
    <ImPlay2/>  
)
*/ 