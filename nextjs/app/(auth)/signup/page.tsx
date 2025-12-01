"use client"

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()


    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />

                <button onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/signup", {
                        username, password
                    })

                    router.push("/signin")
                }}>Sign Up</button>
            </div>

        </div>
    )
}