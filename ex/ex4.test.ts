import { describe, expect, test  } from "vitest";
import { sqrt, sumArray,fetchUserData,nextFibonacciValue  } from "./ex4";
// 4
describe("aqrt function", () => {
  test("sqrt", () => {
    const num = sqrt(5);
    expect(num).toEqual(2.23606797749979);
  });
});
// 5
describe("sumarray", () => {
  test("sum", () => {
    const num = sumArray([1, 2, 3]);
    expect(num).toEqual(6);
});
    test("greater than a specified number", () => {
      const numbers = [1, 2, 3, 4, 5];
      const sum = sumArray(numbers);
      expect(sum).toBeGreaterThan(2);
    });
    test("contain a specified num", () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(numbers).toContain(4);
    });
});
// 6
describe('fetchUserData function', () => {
    test('htt', async () => {
        const userId = 1; 
        const userData = await fetchUserData(userId);
        expect(userData).toEqual( {
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
          },

        )
    });
})
// 7
describe('nextFibonacciValue function', () => {
    test(' Fibonacci ', () => {
        const validFibonacciArray = [0, 1, 1, 2, 3, 5, 8];
        const nextValue = nextFibonacciValue(validFibonacciArray);
        expect(nextValue).toBe(13);
    });
})