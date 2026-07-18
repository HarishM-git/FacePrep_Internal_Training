import { useState } from 'react'
import './App.css'

function App() {

    const [count,setCount]=useState(0);
    function HandleEvent(){
      console.log("Button is Clicked");
      setCount(count+1);
    }

    return (
      <div>
        <h1>Hello</h1>
        <button cou={count} onClick={HandleEvent}>Click me {count}</button>
        <button cou={count} onClick={HandleEvent}>Click me {count}</button>
      </div>

      
    );



}

function Button(){
    const [count,setCount]=useState(0);
    function HandleEvent(){
      console.log("Button is Clicked");
      setCount(count+1);
    }
    return (
      <button onClick={HandleEvent}>
        Click Me to increase {count}
      </button>
    )
}

export default App
