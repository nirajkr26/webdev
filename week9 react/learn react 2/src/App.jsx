import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      {/* dumb way to do routing */}
      <BrowserRouter>

        <Link to="/">Home</Link>||

        <Link to="/neet/online-coaching-class-11">Class 11</Link>||
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function LandingPage() {
  return <div>
    <h1>Welcome to ALLEN</h1>
  </div>
}

function Class11Program() {
  return <div>
    <h1>Class 11 PCB</h1>
  </div>
}

function Class12Program() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  return <div>
    <h1>Class 12 PCB</h1>
    <button onClick={onClick}>Back</button>
  </div>
}

export default App;