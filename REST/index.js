const express = require("express");
const app = express();
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = [
    {
        "username": "niraj",
        "content":"hello world"
    },
    {
        "username": "saurabh",
        "content":"hello duniya"
    },
    {
        "username": "piyush",
        "content":"hello guys"
    }

]
app.get("/posts", (req, res) => {
    res.render("index",{
        posts
    })
})

app.listen(3000);