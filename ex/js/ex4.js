"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextFibonacciValue = exports.fetchUserData = exports.sumArray = exports.sqrt = void 0;
function sqrt(number) {
    if (number < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(number);
}
exports.sqrt = sqrt;
console.log(sqrt(5));
// 5
function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
exports.sumArray = sumArray;
console.log(sumArray([1, 2, 3]));
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(a => a.json())
            .then(a => a);
        return result;
    });
}
exports.fetchUserData = fetchUserData;
function nextFibonacciValue(numbers) {
    const length = numbers.length;
    const nextFibonacci = numbers[length - 1] + numbers[length - 2];
    return nextFibonacci;
}
exports.nextFibonacciValue = nextFibonacciValue;
// console.log(nextFibonacciValue([1,4,8,1]))
