"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(word) {
    // Remove white spaces and make the string lowercase for comparison
    const cleanedWord = word;
    const reversedWord = cleanedWord.split('').reverse().join('');
    if (cleanedWord === reversedWord) {
        return true;
    }
    else {
        return false;
    }
}
exports.isPalindrome = isPalindrome;
// console.log(isPalindrome("aba"))
// console.log("j")
