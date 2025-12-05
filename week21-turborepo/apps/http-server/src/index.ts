import express from "express";

const app = express()

app.use(express.json())

app.get("/chat", (req, res) => {
    res.send("hello world")
})

app.listen(3001)