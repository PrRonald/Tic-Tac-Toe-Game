import React from "react";
import { infoContext } from "../App";

 function Redo(){

    const {square, setSquare,
           squareCounter, setSquareCounter,
           constCounter, constSquare
          } = React.useContext(infoContext);

  function onClickedRedo(){
    let newSquare = constCounter.slice();
    let cpSquare = square.slice();
    let cpsquareCounter = squareCounter.slice();

    for (let i = 0; i < constCounter.length; i++) {
      if(squareCounter[i] == constCounter[i]){
        newSquare[i] = null;
      }
    }

    const filteredArray = newSquare.filter((element) => element !== null);
    let minSquare = Math.min(...filteredArray);
    let indexSquare = newSquare.indexOf(minSquare);
    cpSquare[indexSquare] = constSquare[indexSquare];
    cpsquareCounter[indexSquare] = constCounter[indexSquare]

    setSquare(cpSquare);
    setSquareCounter(cpsquareCounter);
  }

    return <button className="button-Redo button" onClick={onClickedRedo}>Redo</button>;
  }

export {Redo};