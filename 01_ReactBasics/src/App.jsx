import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0);

  const addNum = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      setCounter(0);
    }
  }
  const removeNum = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1)
    }

  }


  return (
    <>
      <h1>Counter App </h1>
      <button onClick={addNum}>+</button>
      <button onClick={removeNum}>-</button>
      <h2>Counter : {counter}</h2>
    </>
  )
}

export default App
