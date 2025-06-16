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
        msg: "Sign up successful"
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
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
            username:users[i].username
        }, JWT_SECRET);
        res.header("jwt",token);
        
        res.json({
            token: token
        })
    }
})

function auth(req,res,next){//using this middleware for authentication
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;//modifying request object
        next();
    }else{
        res.json({
            msg:"you are not logged in"
        })
    }
}

app.get("/me",auth ,function (req, res) {
        let founduser = null;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == req.username) {
                founduser = users[i];
            }
        }

        res.json({
            username:founduser.username,
            password:founduser.password
        })
    

})




app.listen(3000);