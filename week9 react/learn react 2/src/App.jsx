import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      {/* dumb way to do routing */}
      <a href="/">Home</a>||
      <a href="/neet/online-coaching-class-11">Class 11</a>||
      <a href="/neet/online-coaching-class-12">Class 12</a>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function LandingPage(){
  return <div>
    <h1>Welcome to ALLEN</h1>
  </div>
}

function Class11Program(){
  return <div>
    <h1>Class 11 PCB</h1>
  </div>
}

function Class12Program(){
  return <div>
    <h1>Class 12 PCB</h1>
  </div>
}

export default App;