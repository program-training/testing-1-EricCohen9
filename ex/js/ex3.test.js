"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ex3_1 = require("./ex3");
(0, vitest_1.describe)('sortAscending function', () => {
    (0, vitest_1.test)('Ascending array', () => {
        const unsortedArray = [5, 1, 4, 2, 8];
        const sortedArray = (0, ex3_1.sortAscending)(unsortedArray);
        (0, vitest_1.expect)(sortedArray).toEqual([1, 2, 4, 5, 8]);
    });
});
