const express = require("express");
const app = express();

app.use(express.json());

const users = [];

function generateToken() {
    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let token = "";

    for (let i = 0; i < 20; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        founduser.token = token;
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

app.get("/me",(req,res)=>{//authenticated endpoint
    const token=req.headers.token;
    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            founduser=users[i];
        }

    }

    if(founduser){
        res.json({
            message:"you are signed in",
            username:founduser.username,
            password:founduser.password
        })
    }else{
        res.status(403).send({
            message:"Invalid token"
        })
    }
})

app.listen(3000);