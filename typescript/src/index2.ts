interface User {
    name: string,
    age: number,
    address?: { //add question mark to make optional
        city: "patna" | "punjab",
        country: string,
        pincode: number
    }
}

let user: User = {
    name: "niraj",
    age: 19,
    address: {
        city: "patna",
        country: "india",
        pincode: 800001
    }
}
function isLegal(user: User): boolean {
    return user.age > 18;
}

console.log(isLegal(user));

interface People {
    name: string,
    age: number,
    greet: () => string,
}

let person: People = {
    name: "niraj",
    age: 19,
    greet: () => {
        return "hi"
    }
}

console.log(person.greet());

type Users = {
    name: string,
    age: number,
}

function isAdult(user:Users):boolean{
    return user.age> 18;
}

console.log(isAdult({
    name:"niraj",
    age: 17
}))

type Employee = {
    name: string,
    start: Date
}

type Manager = {
    name: string, 
    department: string
}

type Lead = Employee & Manager; // intersection (must satisfy both)

type TeamLead = Employee | Manager; // union (must satisfy at least one)

let p1: Lead = {
    name: "suresh",
    start: new Date(Date.now()),
    department: "cse"
}

let p2: TeamLead = {
    name: "chandu",
    department: "it"
}

