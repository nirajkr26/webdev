const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "ilovesunnyday";

app.use(express.json());

const users = [];



app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "you are signed up",
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let founduser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            founduser = users[i];
            break;
        }
    }

    if (founduser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        
        // founduser.token = token;
        res.json({
            message: "you are signed in",
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req, res) => {//authenticated endpoint
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    const username = decoded.username;
    let founduser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            founduser = users[i];
        }

    }

    if (founduser) {
        res.json({
            message: "you are signed in",
            username: founduser.username,
            password: founduser.password
        })
    } else {
        res.status(403).send({
            message: "Invalid token"
        })
    }
})

app.listen(3000);