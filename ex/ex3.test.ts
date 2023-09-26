import { describe, expect, test } from "vitest";
import { sortAscending } from "./ex3";

    describe('sortAscending function', () => {
    test('Ascending array', () => {
        const unsortedArray = [5, 1, 4, 2, 8];
        const sortedArray = sortAscending(unsortedArray);
        expect(sortedArray).toEqual([1, 2, 4, 5, 8]);
    })
});
