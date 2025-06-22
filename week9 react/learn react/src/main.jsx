import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Fetch from './fetch.jsx'
import Card from './card.jsx'
import Items from './items.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <br /><hr /><br />
        <Fetch />
        <br /><hr /><br />
        <Card />
        <br /><hr /><br />
        <Items/>
    </>

)
