  function Square({value, onClicked}){
    return <button className="square"onClick={onClicked}>{value}</button>;
  }

  function Restart({onClicked}){
    return <button className="button-restart" onClick={onClicked}>Restart</button>;
    }

  function Undo({onClicked}){
    return <button className="button-Undo" onClick={onClicked}>Undo</button>;
  }

  function Redo({onClicked}){
    return <button className="button-Redo" onClick={onClicked}>Redo</button>;
  }




export {Square, Restart, Undo, Redo}