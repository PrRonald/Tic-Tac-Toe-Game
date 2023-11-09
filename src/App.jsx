import { useState } from "react";

function Square({value, onClicked}){
  return <button className="square"onClick={onClicked}>{value}</button>;
}

function Restart({onClicked}){
  return <button className="button-restart" onClick={onClicked}>Restart</button>;
}

export default function Board() {
  const [xgame, setXgame] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClik(i){
    
    if (square[i] || calculateWinner(square)) return;
    square[i] = (xgame) ? 'X': 'O';
    setXgame(!xgame);
    setSquare(square);
  }

  function onClickRestar(){
    if (square.length > 0){
      setSquare(Array(9).fill(null));
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
