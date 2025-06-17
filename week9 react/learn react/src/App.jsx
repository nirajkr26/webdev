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

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
}

export default App