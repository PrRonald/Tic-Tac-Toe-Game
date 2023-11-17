import React, { useState } from "react";
import {Board} from "./Board";

const infoContext = React.createContext(null);

function Game(){

  const [gamer, setGamer] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [squareCounter, setSquareCounter] = useState(Array(9).fill(null));
  const [counter, setCounter] = useState(0);
  const [constSquare, setConstSquare] = useState(Array(9).fill(null));
  const [constCounter, setConstCounter ] = useState(Array(9).fill(null));

  return(
    <>
      <div>
        <infoContext.Provider
         value={{gamer, setGamer,
                 square, setSquare,
                 squareCounter, setSquareCounter,
                 counter, setCounter,
                 constSquare, setConstSquare,
                 constCounter, setConstCounter }}>
          <Board /> 
        </infoContext.Provider>
      </div>
    </>
      )
}

export default Game
export {infoContext};