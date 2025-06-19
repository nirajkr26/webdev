const express = require("express");
const app = express();
const path = require("path")
const { v4: uuidv4 } = require('uuid');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = [
    {
        "id": uuidv4(),
        "username": "niraj",
        "content": "hello world"
    },
    {
       "id": uuidv4(),
        "username": "saurabh",
        "content": "hello duniya"
    },
    {
       "id": uuidv4(),
        "username": "piyush",
        "content": "hello guys"
    }

]
app.get("/posts", (req, res) => {
    res.render("index", {
        posts
    })
})

app.get("/posts/new", (req, res) => {
    res.render("new")
})

app.post("/posts", (req, res) => {
    posts.push(
        req.body
    )
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post=posts.find(post=>post.id==id);
    res.render("show",{
        post
    })
})

app.listen(3000);