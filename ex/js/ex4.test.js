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
const vitest_1 = require("vitest");
const ex4_1 = require("./ex4");
// 4
(0, vitest_1.describe)("aqrt function", () => {
    (0, vitest_1.test)("sqrt", () => {
        const num = (0, ex4_1.sqrt)(5);
        (0, vitest_1.expect)(num).toEqual(2.23606797749979);
    });
});
// 5
(0, vitest_1.describe)("sumarray", () => {
    (0, vitest_1.test)("sum", () => {
        const num = (0, ex4_1.sumArray)([1, 2, 3]);
        (0, vitest_1.expect)(num).toEqual(6);
    });
    (0, vitest_1.test)("greater than a specified number", () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = (0, ex4_1.sumArray)(numbers);
        (0, vitest_1.expect)(sum).toBeGreaterThan(2);
    });
    (0, vitest_1.test)("contain a specified num", () => {
        const numbers = [1, 2, 3, 4, 5];
        (0, vitest_1.expect)(numbers).toContain(4);
    });
});
// 6
(0, vitest_1.describe)('fetchUserData function', () => {
    (0, vitest_1.test)('htt', () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = 1;
        const userData = yield (0, ex4_1.fetchUserData)(userId);
        (0, vitest_1.expect)(userData).toEqual({
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        });
    }));
});
// 7
(0, vitest_1.describe)('nextFibonacciValue function', () => {
    (0, vitest_1.test)(' Fibonacci ', () => {
        const validFibonacciArray = [0, 1, 1, 2, 3, 5, 8];
        const nextValue = (0, ex4_1.nextFibonacciValue)(validFibonacciArray);
        (0, vitest_1.expect)(nextValue).toBe(13);
    });
});
