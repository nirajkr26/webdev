const express = require("express")
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { auth, JWT_SECRET } = require("./auth");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const app = express()
const port = 3000;



app.use(express.json());

mongoose.connect("")

app.post("/signup", async function (req, res) {
    const requiredbody=z.object({
        name:z.string().min(3).max(20),
        email:z.string().email(),
        password:z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
    })

    // const parsedData=requiredbody.parse(req.body);
    const parsedDataWithSuccess=requiredbody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect format",
            error:parsedDataWithSuccess.error
        })
        return;
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    let errorthrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })
    } catch (e) {
        res.status(403).json({
            message: "User already exists"
        })
        errorthrown = true;
    }

    if (!errorthrown) {
        res.json({
            message: "You are signed up!"
        })
    }
})

app.post("/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.status(403).json({
            message: "User does not exist in db"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    console.log(user);

    if (passwordMatch) {
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