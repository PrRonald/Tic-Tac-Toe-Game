import React from "react";
import { infoContext } from "../App";
import { SlControlEnd } from "react-icons/sl";

function Undo(){

  const {square, setSquare,
         squareCounter,
         gamer, setGamer
        } = React.useContext(infoContext);

  function onClickedUndo(){
    const beforeSquare = square.slice();
    let maxSquare = Math.max(...squareCounter);
    let indexSquare = squareCounter.indexOf(maxSquare);

    beforeSquare[indexSquare] = null;
    squareCounter[indexSquare] = null;

    setSquare(beforeSquare);
    setGamer(!gamer);
  }
  return <button className="button-Undo button" onClick={onClickedUndo}><SlControlEnd /></button>;
}

export {Undo};

