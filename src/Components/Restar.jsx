import React from "react";
import { infoContext } from "../App";
import { TfiControlRecord } from "react-icons/tfi";
function Restart(){
  
  const {setSquare,
    setConstCounter,
    setCounter,
    setConstSquare,
    square } = React.useContext(infoContext); 

  function onClickRestar(){

   
    if (square.length > 0){

      setSquare(Array(9).fill(null));
      setConstCounter(Array(9).fill(null));
      setCounter(0);
      setConstSquare(Array(9).fill(null));

    }
  }

  return <button className="button-Restart button" onClick={onClickRestar}><TfiControlRecord /></button>;
  }

  export {Restart};
