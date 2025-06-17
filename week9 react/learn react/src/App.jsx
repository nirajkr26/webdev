import { useState } from "react"


function App() {
  return <div>
    <b>
      hi there
    </b>
    {/* rendering counter */}
    <Counter></Counter>
  </div>
}


function Counter() {
  const [count,setcount]=useState(0);

  const increaseCount=()=>{
    setcount(count+1);
  }
  const decreaseCount=()=>{
    setcount(count-1);
  }
  const resetCount=()=>{
    setcount(0);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}

export default App