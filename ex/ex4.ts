import axios from "axios";
export function sqrt(number: number): number {
    if (number < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(number);
}
console.log(sqrt(5))
// 5
export function sumArray(numbers: number[]): number {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1,2,3]))
// 6
interface user{
    "id": number,
    "name":string,
    "username": string,
    "email": string,
    
}
export async function fetchUserData(userId:number){
        let result=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(a=>a.json())
            .then(a=>a)
        return result
}
export function nextFibonacciValue(numbers: number[]): number {
    const length = numbers.length;
    const nextFibonacci = numbers[length - 1] + numbers[length - 2];
    return nextFibonacci;
}
// console.log(nextFibonacciValue([1,4,8,1]))




