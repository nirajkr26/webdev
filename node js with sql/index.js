const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

//to use sql from cli run --> /usr/local/mysql/bin/mysql -u root -p

const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"learn"
})

try{
    connection.query("show tables",(err,res)=>{
        if(err) throw err;
        console.log(res);
    })
}catch(e){
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