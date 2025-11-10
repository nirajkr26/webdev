
// type of an object

function greet(user: {
    name: string,
    age: number
}) {
    console.log(user.name + " " + user.age)
}

greet({
    name: "niraj", age: 19
})

//interface

interface userType {
    firstname: string,
    lastname: string,
    age: number
}

function greeting(user: userType) {
    console.log(user.lastname + " " + user.age)
}

let user = {
    firstname: "niraj",
    lastname: "kumar",
    age: 19
}
greeting(user);

// type -> similar to interfaces but lets do union/intersection/
type sumInput = string | number;

function sum(a: sumInput, b: sumInput) {
    console.log(a + " " + b)
}

sum("nk",19);

interface manager{
    name:string,
    age:number
}

interface employee{
    name:string,
    department:string
}

type lead = manager & employee;
let t:lead = {
    name:"nk",
    age: 19,
    department:"software"
}

console.log(t);