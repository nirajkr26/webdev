import { useState, createContext, useContext } from "react"
import "./app.css"

const BulbContext = createContext();

function Context() {
    const [bulbOn, setBulbOn] = useState(true)
    return (
        <div>
            <BulbContext.Provider value={{
                bulbOn,
                setBulbOn
            }}>
                <LightBulb />
            </BulbContext.Provider>
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
    const bulbOn  = useContext(BulbContext).bulbOn
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