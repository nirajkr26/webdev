import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseRefHook from './UseRefHook.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    // <UseRefHook/>
    <Clock/ >
)
