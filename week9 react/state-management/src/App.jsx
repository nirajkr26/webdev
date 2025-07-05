import { useEffect, useState,memo } from 'react'


function App() {

  return (
    <Counter />
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 3000);
  }, [])

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

const CurrentCount=memo(function () {
  return <div>
    1
  </div>
})

function Decrease() {
  function decrease() {

  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase() {
  function increase() {

  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App




// counter.js
