function Square({value, onClicked}){
    return <button className="square"onClick={onClicked}>{value}</button>;
  }
  
function Restart({onClicked}){
    return <button className="button-restart" onClick={onClicked}>Restart</button>;
  }



export {Square, Restart}