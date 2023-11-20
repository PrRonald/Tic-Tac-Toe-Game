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
          squareCounter,
          counter, setCounter,
          setConstSquare,
          constCounter } = React.useContext(infoContext);

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

    setCounter(counter + 1);
  }


  return(
    <>
    <div className="container">
      <div className="container-square">
        <div className="square-container square-item-0">
          <Square clas={"square-0 square"} value={square[0]} onClicked={() => handleClik(0)}  /> 
        </div>
        <div className="square-container square-item-1">
          <Square clas={"square-1 square"} value={square[1]} onClicked={() => handleClik(1)}  />
        </div>
        <div className="square-container square-item-2">
          <Square clas={"square-2 square"} value={square[2]} onClicked={() => handleClik(2)}  />
        </div>
        <div className="square-container square-item-3">
          <Square clas={"square-3 square"} value={square[3]} onClicked={() => handleClik(3)}/>
        </div>
        <div className="square-container square-item-4">
          <Square clas={"square-4 square"} value={square[4]} onClicked={() => handleClik(4)}/>
        </div>
        <div className="square-container square-item-5">
          <Square clas={"square-5 square"} value={square[5]} onClicked={() => handleClik(5)}  />
        </div>
        <div className="square-container square-item-6">
          <Square clas={"square-6 square"} value={square[6]} onClicked={() => handleClik(6)}/>
        </div>
        <div className="square-container square-item-7">
          <Square clas={"square-7 square"} value={square[7]} onClicked={() => handleClik(7)}/>
        </div>
        <div className="square-container square-item-8">
          <Square clas={"square-8 square"} value={square[8]} onClicked={() => handleClik(8)}/>
        </div>

      </div>
      <div className="container-button">
        <section className="container-nav-button">
          <div className="nav-button">
            <div className="nav-button-Undo">
              <Undo/>
            </div>
            <div className="nav-button-Restar">
              <Restart/>
            </div>
            <div className="nav-button-Redo">
              <Redo/>
            </div>
          </div>
        </section>

        <div className="history-button">
           <History/>
        </div>
      </div>
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
