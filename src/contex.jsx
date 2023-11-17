import React from "react";
// import { useState } from "react";


const Context = React.createContext();

function titacContex({children}){
    const [gamer, setGamer] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null));
    const [squareCounter, setSquareCounter] = useState(Array(9).fill(null));
    const [counter, setCounter] = useState(0);
    const [constSquare, setConstSquare] = useState(Array(9).fill(null));
    const [constCounter, setConstCounter ] = useState(Array(9).fill(null));
  
  
    return(
        <Context.Provider value={{
            gamer,
            setGamer,
            square, setSquare,
            squareCounter, setSquareCounter,
            counter, setCounter,
            constSquare, setConstSquare,
            constCounter, setConstCounter
        }}>
            {children}
        </Context.Provider>
    );
}


export {Context, titacContex};