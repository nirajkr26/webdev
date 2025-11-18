import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("");

  const [socket, setSocket] = useState();

  const sendMessage = () => {
    if (!socket) return;
    //@ts-ignore
    
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")

    setSocket(ws)
    ws.onmessage = (e) => {
      alert(e.data)
    }

  }, [])

  return (
    <>
      <div className="text-center">
        <input className="py-1 px-2 border " type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
        <button className="bg-red-500 text-white py-1 px-2 rounded-md" onClick={sendMessage}>Send</button>
      </div>

    </>
  )
}

export default App
