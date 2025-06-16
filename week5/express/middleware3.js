const express = require("express");
const app = express() //to initialize an express app

app.use(express.json());

app.post("/sum", function (req, res) {
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        answer: a + b
    })
})
// localhost:3000/sum?a=1&b=2


app.listen(3000); //mention port number on which to start the server