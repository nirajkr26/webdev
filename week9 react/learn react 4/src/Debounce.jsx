import { useEffect, useRef, useState } from "react";

/*
function useDebounce(original) {
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(original, 300);
    }

    return fn;
}

function Debounce() {
    function sendDataToBackend() {
        fetch("api.amazon.com/search/")
    }

    const debouncedFn = useDebounce(sendDataToBackend)

    return <>
        <input type="text" onChange={debouncedFn} />
    </>
}
*/

const useDebounce=(value,delay)=>{
    const [debouncedValue,setDebouncedValue]=useState(value);

    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebouncedValue(value);
        },delay)
        
        return ()=>{
            clearTimeout(handler);
        }
    },[value,delay])

    return debouncedValue;
}

function Debounce(){
    const [inputVal,setInputVal]=useState("")
    const debouncedValue=useDebounce(inputVal,300)

    function change(e){
        setInputVal(e.target.value)
    }

    useEffect(()=>{
        //expensive operation
        //fetch
        console.log("debounced value is",debouncedValue)
    },[debouncedValue])

    return <>
    <input type="text" onChange={change} />
    </>
}

export default Debounce;