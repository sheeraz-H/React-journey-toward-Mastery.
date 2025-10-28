import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)
let [message, setMessage] = useState('')

let AddValue = () => {
  if(counter < 20){
  setCounter(counter => counter + 1);
  setMessage('');
  }else{
    setMessage(
      <>
      You can not go above 20; <br/> try again!
      </>
    )
  }
}

let RemoveValue = () => {
    if(counter > 0){
    setCounter(counter => counter - 1);
    setMessage('');
  }else{
    setMessage(
      <>
      You can not go below 0;<br/> try again! 
      </>
    )
  }
}
  return (
  <>
    <h1>Vite + React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={AddValue}>Add value</button> <br /><br />
    <button onClick={RemoveValue}>Remove value</button><br /><br />
     {/* Show message only if exists */}
      {message && <p>{message}</p>}
  </>
  )
}

export default App
