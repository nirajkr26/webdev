// class can implement interfaces but not types

interface People {
    name: string,
    age: number,
    // greet: () => string,
    isLegal(): boolean,
}

// let person: People = {
//     name: "niraj",
//     age: 19,
//     greet: () => {
//         return "hi"
//     }
// }

class Manager implements People {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal(): boolean {
        return this.age > 18
    }
}

class God extends Manager {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

let user = new Manager("john", 30);
console.log(user.isLegal());

// abstract class similar to interface but upar upar se
// in abstract class we can give default implementation as well
//interface implements || abstract extends

abstract class person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet():string;

    hello() {
        console.log("hi there");
    }
}

class Human extends person {
    constructor(public name: string) {
        super(name)
    }

    greet() {
        return "hi " + this.name;
    }
}




