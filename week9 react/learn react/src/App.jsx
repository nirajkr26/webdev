import { useEffect, useState } from "react"

//conditional rendering
function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible(c => !c)
    }, 5000);
  }, [])

  return <div>
    <h1>conditional rendering</h1>
    {counterVisible ? <Counter></Counter> : null}
  </div>
}


function Counter() {
  const [count, setcount] = useState(0);

  //hooking into lifecycle events of react

  //useEffect takes two input function and dependency array
  useEffect(() => {
    console.log("on mount");
    let clock = setInterval(() => {
      setcount(count => count + 1);
    }, 1000)

    return () => {
      console.log("on unmount");
      clearInterval(clock);
    }
  }, []);//dependency array



  function increaseCount() {
    setcount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
}

export default App