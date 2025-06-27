import { useState, useEffect } from "react";

export default function usePostTitle(){
    const [post, setPost] = useState({})

    async function getPost() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json = await response.json();
        setPost(json)
    }

    useEffect(() => { //we can not write async function inside useEffect
        getPost()
    }, [])

    return post.title
}