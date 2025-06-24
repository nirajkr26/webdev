import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      {/* dumb way to do routing */}
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return <div style={{ height: "100vh" }}>
    <Link to="/">Home</Link>||
    <Link to="/neet/online-coaching-class-11">Class 11</Link>||
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

    <div style={{ height: "85vh" }}>
      <Outlet />
    </div>
    <div style={{ backgroundColor: "white", color: "Black", height: "5vh" }}>Footer</div>

  </div>
}

function ErrorPage() {
  const navigate = useNavigate();
  const onClicked = () => {
    navigate("/")
  }

  return <div>
    <h1>Some Error occurred</h1>
    <button onClick={onClicked}>Go to Home</button>
  </div>
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
  const onClicked = () => {
    navigate("/");
  };

  return <div>
    <h1>Class 12 PCB</h1>
    <button onClick={onClicked}>Back</button>
  </div>
}

export default App;