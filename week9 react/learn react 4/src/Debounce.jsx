import { useRef } from "react";

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

export default Debounce;