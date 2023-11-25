import React, { useState } from "react";
import {Board} from "./Components/Board";

const infoContext = React.createContext(null);

function Game(){

  const [gamer, setGamer] = useState(true);
  const [theme, setTheme] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [squareCounter, setSquareCounter] = useState(Array(9).fill(null));
  const [counter, setCounter] = useState(0);
  const [constSquare, setConstSquare] = useState(Array(9).fill(null));
  const [constCounter, setConstCounter ] = useState(Array(9).fill(null));

  return(
  <infoContext.Provider
   value={{gamer, setGamer,
           theme, setTheme,
           square, setSquare,
           squareCounter, setSquareCounter,
           counter, setCounter,
           constSquare, setConstSquare,
           constCounter, setConstCounter }}>
    <Board /> 
  </infoContext.Provider>
)
}

export default Game
export {infoContext};