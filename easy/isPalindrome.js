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


// Valid Palindrome
//a phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanaumeric characters include letters and numbers.


// time O(n) space O(1)
function validPalindrome(s){
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length -1;
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama")) //true
console.log(validPalindrome("race a car")) //false
