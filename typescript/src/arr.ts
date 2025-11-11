function getMax(nums: number[]): number {
    let maxVal: number = -100000;
    for (const num of nums) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}

console.log(getMax([1, 2, 3, 4, 5]));

interface User {
    name: string,
    age: number
}

function getLegal(users: User[]) {
    const filtered = users.filter((user) => user.age > 18);
    return filtered;
}

console.log(getLegal([{ name: "niraj", age: 17 }, { name: "saurabh", age: 22 }]))