import React from "react";
import { infoContext } from "../App";
import { History } from "./History";
import { Redo } from "./Redo";
import { Restart } from "./Restar";
import { Undo } from "./Undo";
import { Square } from "./Square";
import { calculateWinner } from "../JSX/winner";

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

      <div className="container-button">
        <div className="container-nav-button">

            <div className="nav-button-Undo button-cont">
              <Undo/>
            </div>

            <div className="nav-button-Restar button-cont">
              <Restart/>
            </div>

            <div className="nav-button-Redo button-cont">
              <Redo/>
            </div>

        </div>

        <div className="history-button">
           <History/>
        </div>
      </div>
      
      <div className="container-square">
        <div className="square-container-items">
          <div className="square-item square-item-0">
            <Square clas={"square-0 square"} value={square[0]} onClicked={() => handleClik(0)}  /> 
          </div>
          <div className="square-item square-item-1">
            <Square clas={"square-1 square"} value={square[1]} onClicked={() => handleClik(1)}  />
          </div>
          <div className="square-item square-item-2">
            <Square clas={"square-2 square"} value={square[2]} onClicked={() => handleClik(2)}  />
          </div>
          <div className="square-item square-item-3">
            <Square clas={"square-3 square"} value={square[3]} onClicked={() => handleClik(3)}/>
          </div>
          <div className="square-item square-item-4">
            <Square clas={"square-4 square"} value={square[4]} onClicked={() => handleClik(4)}/>
          </div>
          <div className="square-item square-item-5">
            <Square clas={"square-5 square"} value={square[5]} onClicked={() => handleClik(5)}  />
          </div>
          <div className="square-item square-item-6">
            <Square clas={"square-6 square"} value={square[6]} onClicked={() => handleClik(6)}/>
          </div>
          <div className="square-item square-item-7">
            <Square clas={"square-7 square"} value={square[7]} onClicked={() => handleClik(7)}/>
          </div>
          <div className="square-item square-item-8">
            <Square clas={"square-8 square"} value={square[8]} onClicked={() => handleClik(8)}/>
          </div>
        </div>
      </div>
    </div>
    </>
  ) 
}

export  {Board}
