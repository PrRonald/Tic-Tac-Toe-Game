import { useState } from "react";

function Square({value, onClicked}){
  return <button className="square"onClick={onClicked}>{value}</button>;
}

function Restart({onClicked}){
  return <button className="button-restart" onClick={onClicked}>Restart</button>;
}

export default function Board() {
  const [xgame, StateXgame] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClik(i){
    
    const nextSquare = square.slice();
    if (square[i]) return;
    nextSquare[i] = (xgame) ? 'X': 'O';
    StateXgame(!xgame);
    setSquare(nextSquare);
  }

  function onClickRestar(){
    if (square.length > 0){
      setSquare(square.length = 0); 
      setSquare(square.fill(null));
    }
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
        <Restart onClicked ={onClickRestar} />
      </div>


    </>
  ) 
}

