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

  function History({setSquare}){
    function onClickedHistory(){
      setSquare(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    }
    return <button className="button-History" onClick={onClickedHistory}>History</button>;
  }




export {Square, Restart, Undo, Redo, History}