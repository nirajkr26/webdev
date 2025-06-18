const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/interpolation",(req,res)=>{
    res.render("interpolation.ejs");
})

app.get("/hello", (req, res) => {
    res.send("hello world");
})

app.listen(3000);