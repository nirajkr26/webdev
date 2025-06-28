import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './Fetch.jsx'
import Prev from './Prev.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <hr />
        <Fetch />
        <hr />
        <br />
        <Prev />
    </>
)
