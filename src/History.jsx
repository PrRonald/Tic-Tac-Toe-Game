import React from "react";
import { infoContext } from "./App";

  function History(){
    
    const {setSquare} = React.useContext(infoContext);

    function onClickedHistory(){
      setSquare([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    return (<button className="button-History" onClick={onClickedHistory}>History</button>)
  }

  export {History};


