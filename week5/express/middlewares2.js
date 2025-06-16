const express = require("express");
const app = express() //to initialize an express app

//logs the method,hostname,timestamp and url

function logger(req,res,next){
    console.log(`Method is ${req.method}`);
    console.log(`Url is ${req.url}`);
    console.log(`Hostname is ${req.hostname}`);
    console.log(new Date());

    next()
}

app.use(logger);

app.get("/sum", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a + b
    })
})
// localhost:3000/sum?a=1&b=2

app.get("/sub", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a - b
    })
}) 

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