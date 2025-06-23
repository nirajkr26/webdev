import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Class11Program(){
  return <div>
    <h1>Class 11 PCB</h1>
  </div>
}

export default App;