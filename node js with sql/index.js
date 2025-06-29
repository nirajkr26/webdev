const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

//to use sql from cli run --> /usr/local/mysql/bin/mysql -u root -p

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "learn"
})

try {
    connection.query("show tables", (err, res) => {
        if (err) throw err;
        console.log(res);
    })
} catch (e) {
    console.log(e);
}

let insertQuery = "Insert into users (id,username,email,password) values (?,?,?,?)";

let users = [
    ["123", "user1", "user@gmail.com", "123456"]
    ["132", "user2", "user2@gmail.com", "123456"]
    ["231", "user3", "user3@gmail.com", "123456"]
]

try {
    connection.query(insertQuery, [users], (err, res) => {
        if (err) throw err;
        console.log(res);
    })
} catch (e) {
    console.log(e);
}

connection.end();

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

console.log(createRandomUser())