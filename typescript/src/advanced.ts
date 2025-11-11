interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

// Pick helps choose properties from interface/types

//partial helps make all properties optional

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    //hit the db to update the user

}

updateUser({ name: "niraj", age: 19 });

// readonly

type Detail = {
    readonly name: string,
    readonly age: number,
}

const obj: Detail = {
    name: "john",
    age: 25
}

type Employee = {
    name: string,
}

const employee: Readonly<Employee> = {
    name: "suresh"
}

interface Value {
    name: string,
    age: number
}

type Users = {
    [key: string]: Value,
}

const users: Users = {
    "first": {
        name: "niraj",
        age: 19
    },
    "second": {
        name: "piyush",
        age: 21
    }
}

//records and maps

type newUsers = Record<string, Value>

const newUser: newUsers = {
    "first": {
        name: "niraj",
        age: 19
    },
    "second": {
        name: "piyush",
        age: 21
    }
}

const userMap = new Map<string, Value>();
userMap.set("first", { name: "one", age: 1 });
userMap.set("second", { name: "two", age: 2 });

const user = userMap.get("second");
console.log(user);

//exclude

type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log("handling event " + event);
}

handleEvent('click')