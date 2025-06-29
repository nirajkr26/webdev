const express = require("express")
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { auth, JWT_SECRET } = require("./auth")

const app = express()
const port = 3000;



app.use(express.json());

mongoose.connect("")

app.post("/signup", async function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        message: "You are signed up!"
    })
})

app.post("/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid email or password"
        })
    }
})

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;

    await TodoModel.create({
        title,
        userId
    })

    res.json({
        userId: userId,
        message: `Todo added - ${title}`
    })
})

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })

})






app.listen(port)