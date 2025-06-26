
import { useState } from 'react'
import './App.css'

//custom hook function must start with use
//must use a hook inside a function

// function useValue(){
//   const [value,setValue]=useState(0);

//   return value;
// }

function useCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(c => c + 1);
  }
  return [count, increment]
}

function App() {
  const [count, increment] = useCounter();
  
  return <div>
    <button onClick={increment}>Increase {count}</button>
  </div>
}

export default App
