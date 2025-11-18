import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (socket) => {
    socket.send("hello");
    console.log("user connected")

    // setInterval(() => {
    //     socket.send("current price " + Math.random())
    // }, 1000)

    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong")
        }
    })
})

