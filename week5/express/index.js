const express = require("express");
const app = express() //to initialize an express app

app.get("/sum", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a + b
    })
})
// localhost:3000/sum?a=1&b=2

app.get("/sub/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a - b
    })
}) // localhost:3000/sum/5/3

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a * b
    })
})

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a / b
    })
})

app.listen(3000); //mention port number on which to start the server