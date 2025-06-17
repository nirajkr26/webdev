

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
  // this would not work because we cant put raw variable in dynamic content
  let count=0;
  function increaseCount() {
    count=count+1;
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
}

export default App