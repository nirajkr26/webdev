let x: number = 1; // type inferencing

let y: number | string = 1;
y = "niraj"

console.log(y)
console.log(x)

function greet(name: string) {
    return "hello " + name;
}

console.log(greet("niraj"));

//number, string, any

let z: any = 1;
z = true
z = "niraj"

let ans = (a: number, b: number): number =>{
    return a + b
}

console.log(ans(2,3))

//function take another function as input and runs it after a delay

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function () {
    console.log("hello")
})

function delay(fn: (() => number) | ((a: number) => number)) {
    setTimeout(fn, 1000);
}


function delayed(fn: (a:string)=>void){
    setTimeout(fn,400);
}

delayed(greet);


