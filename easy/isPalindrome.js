// function isPalindrome(x) {
//     const original = x.toString();
//     const reversed = x.toString().split("").reverse().join("");
//     return original === reversed;
// }


function isPalindromeRecursive(string) {
    if(string.length === 1) {
        return true;
    }
    if(string.length === 2) {
        return string[0] === string[1];
    }
    if(string[0] === string.slice(-1)) {
        return isPalindromeRecursive(string.slice(1, -1));
    }
    return false;
}


console.log(isPalindromeRecursive('awesome'))
console.log(isPalindromeRecursive('tacocat'))
console.log(isPalindromeRecursive('foobar'))



// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(123))
// console.log(isPalindrome(454))

