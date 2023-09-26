export function isPalindrome(word: string) {
    // Remove white spaces and make the string lowercase for comparison
    const cleanedWord = word
    const reversedWord = cleanedWord.split('').reverse().join('');
    if(cleanedWord === reversedWord){
        return true
    }else{
        return false
    }
     
}
// console.log(isPalindrome("aba"))
// console.log("j")