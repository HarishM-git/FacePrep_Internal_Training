import { useState } from 'react'
import './App.css'

function App() {

      return <>
              <Board/>
            </>

}


function Board(){
  let [square,setSquare]=useState(Array(9).fill(null));
  let [xIsNext,setXY]=useState(true);
  const winner = DecideWinner(square);
  let stat;
  if (winner) {
    stat = "Winner: " + winner;
  } else if (square.every(cell => cell !== null)) {
    stat = "Match Draw!";
  } else {
    stat = "Next Move: " + (xIsNext ? "X" : "O");
  }
  function HandleClick(i){
    let dup=square.slice();
    if(square[i] || DecideWinner(square)){
      return
    }
    if (xIsNext){
      dup[i]='X';
    }
    else{
      dup[i]='O';
    }
    setXY(!xIsNext);
    setSquare(dup);
    // let winner=DecideWinner(dup);
    // console.log(winner);
    // if (winner){
    //   stat=winner;
    // }
    // else{
    //   stat=xIsNext?"X":"O";
    // }
  }
  console.log("Next Move",xIsNext?"X":"O")
  return <>
          <h1>TIC TAC TOE</h1>
                <div className="result" style={{'text-align':'center'}}>{stat}</div>
                  <div className="Board-ct">

                      <div className="Board-row">
                        <Square value={square[0]} onSquareClick={()=>HandleClick(0)} />
                        <Square value={square[1]} onSquareClick={()=>HandleClick(1)}/>
                        <Square value={square[2]} onSquareClick={()=>HandleClick(2)}/>

                      </div>
                      
                      <div className="Board-row">
                        <Square value={square[3]} onSquareClick={()=>HandleClick(3)}/>
                        <Square value={square[4]} onSquareClick={()=>HandleClick(4)}/>
                        <Square value={square[5]} onSquareClick={()=>HandleClick(5)}/>

                      </div>
                      <div className="Board-row">
                        <Square value={square[6]} onSquareClick={()=>HandleClick(6)}/>
                        <Square value={square[7]} onSquareClick={()=>HandleClick(7)}/>
                        <Square value={square[8]} onSquareClick={()=>HandleClick(8)}/>

                      </div>

                  </div>
        </>
}

function Square({value,onSquareClick}){
    // const [value,setValue]=useState(null);
    // function HandleClick(){
    //   // console.log('X');
    //   setValue('X');
    // }
  return <>
            <button className="E-cells" onClick={onSquareClick}>{value}</button>
        </>
}

function DecideWinner(square){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
    if (square[a] && square[a]==square[b] && square[a]==square[c]){
      return square[a];
    }

  }
  return null;
}

export default App
