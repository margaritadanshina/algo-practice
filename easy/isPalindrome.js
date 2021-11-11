function isPalindrome(x) {
    const original = x.toString();
    const reversed = x.toString().split("").reverse().join("");
    return original === reversed;
}


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(123))
console.log(isPalindrome(454))

