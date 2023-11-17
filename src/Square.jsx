function Square({value, onClicked, clas}){
  return <button className={clas} onClick={onClicked}>{value}</button>;
}

export {Square};
