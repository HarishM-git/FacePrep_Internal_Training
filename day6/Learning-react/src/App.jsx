import { useState } from 'react'
import './App.css'

function App() {

      return <>

              <Board/>

              </>

}


function Board(){
  return <>
          <h1>TIC TAC TOE</h1>
                  <div className="Board-ct">

                      <div className="Board-row">
                        <Square/>
                        <Square/>
                        <Square/>

                      </div>
                      <div className="Board-row">
                        <Square/>
                        <Square/>
                        <Square/>

                      </div>
                      <div className="Board-row">
                        <Square/>
                        <Square/>
                        <Square/>

                      </div>

                  </div>
        </>
}

function Square(){
    const [value,setValue]=useState(null);
    function HandleClick(){
      // console.log('X');
      setValue('x');
    }
  return <>
            <button className="E-cells" onClick={HandleClick}>{value}</button>

          </>
}

export default App
