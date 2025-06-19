import { useState, useEffect } from "react"


function Fetch() {
    const [current, setCurrent] = useState("1");
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setLoad(true);
        fetch("https://jsonplaceholder.typicode.com/todos/" + current).then(async (res) => {
            let todo = await res.json();
            setData(todo);
            setLoad(false);
        })
    }, [current])

    return <div>
        <button onClick={() => { setCurrent("1") }} style={{ color: current == "1" ? "red" : "black" }}>Feed</button>

        <button onClick={() => { setCurrent("2") }} style={{ color: current == "2" ? "red" : "black" }}>Connect</button>

        <button onClick={() => { setCurrent("3") }} style={{ color: current == "3" ? "red" : "black" }}>Message</button>


        <button onClick={() => { setCurrent("4") }} style={{ color: current == "4" ? "red" : "black" }}>Settings</button>
        <br />
        {load ? "loading..." : data.title}



    </div>
}

export default Fetch