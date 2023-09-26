"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAscending = void 0;
function sortAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
exports.sortAscending = sortAscending;
