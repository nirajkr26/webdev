import { useState, useEffect } from "react";

export function usePostTitle() {
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

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoad] = useState(true);

    async function getDetails() {
        setLoad(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoad(false);
    }

    useEffect(() => {
        getDetails()
    }, [url])

    useEffect(() => {
        const intervalId = setInterval(getDetails, 10000)
        
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return [
        finalData,
        loading
    ]
}