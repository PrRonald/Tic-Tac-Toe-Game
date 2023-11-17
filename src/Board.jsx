import React from "react";
import { infoContext } from "./App";
import { History } from "./History";
import { Redo } from "./Redo";
import { Restart } from "./Restar";
import { Undo } from "./Undo";
import { Square } from "./Square";

function Board() {

  const { gamer, setGamer,
          square, setSquare,
          squareCounter, setSquareCounter,
          counter, setCounter,
          constSquare, setConstSquare,
          constCounter, setConstCounter } = React.useContext(infoContext);

  function handleClik(i){
    const cpSquare = square.slice();
    const cpConstSquare = square.slice();
    if (cpSquare[i] || calculateWinner(cpSquare)) return;

    cpSquare[i] = (gamer) ? 'X': 'O';
    cpConstSquare[i] = (gamer) ? 'X': 'O';


    squareCounter[i] = counter;
    constCounter[i] = counter;

    setGamer(!gamer);
    setSquare(cpSquare);
    setConstSquare(cpConstSquare);

    // setConstSquare(cpSquare);
    setCounter(counter + 1);

  }

  function onClickRestar(){
    if (square.length > 0){

      setSquare(Array(9).fill(null));
      setConstCounter(Array(9).fill(null));
      setCounter(0);
      setConstSquare(Array(9).fill(null));

    }
  }

  function onClickedUndo(){
    const beforeSquare = square.slice();
    let maxSquare = Math.max(...squareCounter);
    let indexSquare = squareCounter.indexOf(maxSquare);

    beforeSquare[indexSquare] = null;
    squareCounter[indexSquare] = null;

    setSquare(beforeSquare);
    setGamer(!gamer);
  }

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

  return(
    <>
      <div className="board-row">
        <Square value={square[0]} onClicked={() => handleClik(0)}  />
        <Square value={square[1]} onClicked={() => handleClik(1)}  />
        <Square value={square[2]} onClicked={() => handleClik(2)}  />
      </div>

      <div className="board-row">
        <Square value={square[3]} onClicked={() => handleClik(3)}  />
        <Square value={square[4]} onClicked={() => handleClik(4)}  />
        <Square value={square[5]} onClicked={() => handleClik(5)}  />
      </div>

      <div className="board-row">
        <Square value={square[6]} onClicked={() => handleClik(6)}  />
        <Square value={square[7]} onClicked={() => handleClik(7)}  />
        <Square value={square[8]} onClicked={() => handleClik(8)}  />
      </div>
        <div>
           <Undo onClicked={onClickedUndo} />
           <Restart onClicked ={onClickRestar} />
           <Redo onClicked={onClickedRedo} />
        </div>
        <div>
           <History/>
        </div>
      

    </>
  ) 
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export  {Board}
// export const cont = React.createContext(setSquare);
