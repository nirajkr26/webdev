import { useEffect, useState } from "react"

//conditional rendering
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  let increase = () => {
    setCount(c => c + 1);
  }
  let decrease = () => {
    setCount2(c => c - 1);
  }

  return <div>
    <Counter count={count} count2={count2} />
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}


function Counter(props) {

  useEffect(() => {
    console.log("on mount");

    return () => {
      console.log("unmount");
    }
  }, [])

  useEffect(() => {
    console.log("count has changed");
  }, [props.count,props.count2])

  return <div>
    Counter1 {props.count}
    <br />
    Counter2 {props.count2}
  </div>
}

export default App