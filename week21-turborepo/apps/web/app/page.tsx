"use client"

import { TextInput } from "@repo/ui/textInput"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <TextInput placeholder="Id" />
      <button onClick={() => router.push("/chat/123")}>Join Room</button>

    </div>
  );
}
