const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const JWT_SECRET = "ilovexauusd";

let users = [];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        msg: "Sign up successful";
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].passsword == password) {
            founduser = users[i];
        }
    }

    if (!founduser) {
        res.json({
            msg: "Incorrect credentials"
        })
        return;
    } else {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token;
        })
    }
})

app.get("/me", function (req, res) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    // const decodedData=jwt.decode(token); //security vulnerability

    if (decodedData.username) {
        let founduser = null;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == decodedData.username) {
                founduser = users[i];
            }
        }

        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }

})




app.listen(3000);