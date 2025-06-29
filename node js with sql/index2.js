const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "learn"
})

let insertQuery = "Insert into users (id,username,email,password) values (?,?,?,?)";

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

connection.end();

function createRandomUser() {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}
console.log(users);