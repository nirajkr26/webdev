const express=require("express")
const cors=require("cors")
const app=express()

app.use(express.json());
app.use(cors());


//if you want to host frontend and backend on the same domain
app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/cors.html");
})

app.post("/sum",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})
app.post("/sub",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})
app.post("/multiply",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})
app.post("/divide",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})


app.listen(3000)