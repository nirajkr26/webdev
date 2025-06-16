const express = require("express");
const app = express() //to initialize an express app

let requestCount=0;

//express is chain of middlewares

function requestIncreaser(req,res,next){
    requestCount++;
    console.log(`total number of requests = ${requestCount}`);
    next();
}

function realSumHandler(req, res) {
    requestIncreaser();
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a + b
    })
}

app.get("/sum",requestIncreaser,realSumHandler)
// localhost:3000/sum?a=1&b=2

app.get("/sub/:a/:b", function (req, res) {
    requestIncreaser();
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a - b
    })
}) // localhost:3000/sub/5/3

app.get("/multiply", requestIncreaser,function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a * b
    })
})

// app.use(requestIncreaser) //it will make all routes below this add middlewares

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a / b
    })
})

app.listen(3000); //mention port number on which to start the server