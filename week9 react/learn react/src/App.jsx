import { useEffect, useState } from "react"


function App() {
  return <div>
    {/* rendering counter */}
    <Counter></Counter>
  </div>
}


function Counter() {
  const [count,setcount]=useState(0);

  //hooking into lifecycle events of react

  //useEffect takes two input function and dependency array
  useEffect(()=>{
    setInterval(()=>{
      setcount(count+1);
    },1000)
  },[]);
 
  function increaseCount() {
    setcount(count+1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
}

export default App