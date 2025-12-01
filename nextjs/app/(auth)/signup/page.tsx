"use client"

import axios from "axios"
import { useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />

                <button onClick={() => {
                    axios.post("http://localhost:3000/api/v1/signup", {
                        username, password
                    })
                }}>Sign Up</button>
            </div>

        </div>
    )
}