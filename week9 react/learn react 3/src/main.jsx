import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './Context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <hr />
    <Context/>
  </>
)
