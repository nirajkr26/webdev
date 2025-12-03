// "use client"

import { getServerSession } from "next-auth";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function App() {
//   return (
//     <SessionProvider>
//       <Home />
//     </SessionProvider>
//   )
// }

// function Home() {
//   const session = useSession()

//   return (
//     <div>
//       {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}

//       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Logout</button>}
//     </div>
//   )
// }

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}