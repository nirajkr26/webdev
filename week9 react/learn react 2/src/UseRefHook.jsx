import { useRef } from "react";

//useRef hook
//refernce to a value,such that when that value changes it does not re-render

function UseRefHook(){
    const inputRef=useRef();

    const onSubmit=()=>{
        // document.getElementById("name"); //ref same as this
        inputRef.current.focus()
    }

    return (
        <div>
            Sign Up
            <input ref={inputRef} id="name" type="text" />
            <input  id="email" type="text" />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}




export default UseRefHook;