import { useState } from 'react'
import './App.css'

function App() {

      return <>
              <Game/>
            </>

}


function Board({xIsNext,square,onPlay}){

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
    onPlay(dup);
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
                <div className="result" style={{textAlign:'center'}}>{stat}</div>
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


function Game(){
  let [xIsNext,setXY]=useState(true);
  let [history,setHistory]=useState([Array(9).fill(null)]);
  let [currentMove, setCurrentMove]=useState(0);
  let [showHistory,setShowHistory]=useState(false);
  const cur=history[currentMove];
  function HandlePlay(changed){  
    console.log(changed)
    const updateH=[...history.slice(0,currentMove+1),changed];
    setHistory(updateH);
    setCurrentMove(updateH.length-1);
    setXY(!xIsNext);

  }
  function jumpTo(i){
    setCurrentMove(i)
    console.log(cur,i,"suma");
    setXY(i%2===0);
    // <Board xIsNext={xIsNext} square={cur} onPlay={HandlePlay}/>
    
  }
  function showAll(){
    // console.log("show all values in history:",history);
    setShowHistory(!showHistory);
    
  } 
  const move=history.map((item,i)=>{
    let des;
    if (i>0){
      des=`move to this #${i} step`;
    }
    else{
      des='move to first move'
    }
    return <li key={i} ><button onClick={()=>jumpTo(i)}> {des}</button></li>
  })

  return <>
      <div>
        <Board xIsNext={xIsNext} square={cur} onPlay={HandlePlay}/>

      </div>

        <div>
          <ol className="hist">
              {move}
          </ol>
        </div>
        <div>
          {showHistory && (
              <div style={{ marginTop: '20px', padding: '10px', background: '#f4f4f4', color: '#333', borderRadius: '5px' }}>
                <h3>Game History Log (JSON Data):</h3>
                <pre style={{ textAlign: 'left', fontSize: '14px' }}>
                  {JSON.stringify(history, null,3)}
                </pre>
      </div>
    )}
          <button onClick={showAll}>{showHistory?"Hide History":"Show History"}</button>
        </div>
        </>
}



export default App
