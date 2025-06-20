const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/interpolation", (req, res) => {
    res.render("interpolation.ejs");
})

app.get("/hello", (req, res) => {
    res.send("hello world");
})

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {
        diceVal
    });
})

app.get("/ig/:username", (req, res) => {
    const followers = ["jhon", "bob", "shyam", "adam"]
    let { username } = req.params;
    res.render("instagram.ejs", {
        username,
        followers
    })
})

app.listen(3000);