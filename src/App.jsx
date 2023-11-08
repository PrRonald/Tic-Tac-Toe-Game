import { useState } from "react";

function Square({value, onClicked}){
  return <button className="square"onClick={onClicked}>{value}</button>;
}

export default function Board() {
  const [square, setSquere] = useState(Array(9).fill(null));

  function handleClik(i){
    const nextSqaure = square.slice();
    nextSqaure[i] = 'X'
    setSquere(nextSqaure);
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


    </>
  ) 
}

