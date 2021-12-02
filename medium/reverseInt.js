// given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 31, 2 31 - 1], then return 0;

function reverse(x) {
    if(x === 0) {
        return 0
    }
    
}

console.log(reverse(123)) // 321
console.log(reverse(-123)) //-321
console.log(reverse(120)) // 21
console.log(reverse(0)) //0