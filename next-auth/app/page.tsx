"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function App() {
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  )
}

function Home() {
  const session = useSession()

  return (
    <div>
      {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}

      {session.status === "unauthenticated" && <button onClick={() => signIn()}>Logout</button>}
    </div>
  )
}