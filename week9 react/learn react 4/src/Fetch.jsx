import { useEffect, useState } from "react";
import { usePostTitle, useFetch } from "./hooks/usePostTitle";

function Fetch() {
    const [currentPost, setCurrentPost] = useState(1)
    const post = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)

    return <div>
        <button onClick={()=>setCurrentPost(1)}>1</button>
        <button onClick={()=>setCurrentPost(2)}>2</button>
        <button onClick={()=>setCurrentPost(3)}>3</button>
        <br />
        {JSON.stringify(post)}
    </div>
}

export default Fetch;