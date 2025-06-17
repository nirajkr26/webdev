import { useEffect, useState } from "react"

//conditional rendering
function App() {
  let counterVisible = true;

  return <div>
    {counterVisible ? <Counter></Counter> : null}
  </div>
}


function Counter() {
  const [count, setcount] = useState(0);

  //hooking into lifecycle events of react

  //useEffect takes two input function and dependency array
  useEffect(() => {
    setInterval(() => {
      setcount(count => count + 1);
    }, 1000)
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