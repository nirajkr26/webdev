import { useState, createContext, useContext } from "react"
import "./app.css"

const BulbContext = createContext();

function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true)

    return (
        <BulbContext.Provider value={{
            bulbOn,
            setBulbOn
        }}>
            {children}
        </BulbContext.Provider >
    )
}

function Context() {
    return (
        <div>
            <BulbProvider>
                <LightBulb />
            </BulbProvider>
        </div>
    )
}

function LightBulb() {

    return <div>
        <BulbState />
        <ToggleBulbState />
    </div>
}

function BulbState() {
    const bulbOn = useContext(BulbContext).bulbOn
    return <div>
        {bulbOn ? "Bulb is On" : "Bulb is off"}
    </div>
}

function ToggleBulbState() {
    const { bulbOn, setBulbOn } = useContext(BulbContext)
    function toggle() {
        setBulbOn(!bulbOn)
    }

    return <div>
        <button onClick={toggle}>Toggle the Bulb</button>
    </div>
}

export default Context;