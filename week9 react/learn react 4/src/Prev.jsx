import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function Prev() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);

    return <>
        <p>{state}</p>
        <button onClick={() => {
            setState(c => c + 1);
        }}>Click here</button>
        <p>the previous state is {prev}</p>
    </>
}


export default Prev;