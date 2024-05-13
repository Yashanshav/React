import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // const counter = 15

  function addValue() {
    setCounter((prevCounter) => (prevCounter + 1))
    setCounter((prevCounter) => (prevCounter + 1))
    // setCounter((prevCounter) => prevCounter + 1)
    // setCounter((prevCounter) => prevCounter + 1)

  }

  function removeValue() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> Counter React App {counter} </h1>
      <h1> Counter: {counter} </h1>
      <button onClick={addValue}> Add Value</button> {" "}
      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
