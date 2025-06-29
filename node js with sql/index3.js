const express = require("express");
const app = express();
const path = require("path");
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "learn"
})

let insertQuery = "Insert into user (id,username,email,password) values (?,?,?,?)";

let users = [];

for (let i = 0; i < 200; i++) {
    users.push(createRandomUser());
}

try {
    connection.query(insertQuery, [users], (err, res) => {
        if (err) throw err;
        console.log(res);
    })
} catch (e) {
    console.log(e);
}

function createRandomUser() {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    let q = "select count(*) from user";

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            res.render("home.ejs", {
                count: result[0]["count(*)"]
            })
        })
    } catch (e) {
        console.log(e);
        res.send("some error in DB");
    }

})

app.get("/user", (req, res) => {
    let q = "select * from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;

            res.render("show.ejs", {
                users: result
            })
        })
    } catch (e) {
        console.log(e);
        res.send("some error in DB");
    }
})

app.get("/user/:id/edit", (req, res) => {
    let { Id } = req.params;
    let q = `select * from user where id=${Id}`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("edit.ejs", {
                user: result[0]
            })
        })
    } catch (e) {
        console.log(e);
        res.send("some error in DB");
    }
})

app.patch("/user/:id", (req, res) => {
    let { Id } = req.params;
    let { password, username } = req.body
    let q = `select * from user where id=${Id}`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (password != user.password) {
                res.send("Wrong password")
            }else{
                let q2=`update user set username='${username}' where id=${Id}`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user")
                })
            }
           
        })
    } catch (e) {
        console.log(e);
        res.send("some error in DB");
    }
})

app.post("/user", (req, res) => {

})

app.delete("/user/:id", (req, res) => {

})

app.listen(port)