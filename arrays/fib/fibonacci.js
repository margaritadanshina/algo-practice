
//time O(2^N) space O(n)
// function fib (n) {
//     if (n <= 1) return n;
//     else return fib(n - 1) + fib(n - 2);
// }

//time O(2N) space O(n)
//let fibMemo = (function () {
    //memo - is an obj to remember the results of previous operations
    let memo = {};
    let fib = function(n) {
        if(n === 0 || n === 1) {
            return n;
        } else if (memo[n]) {
            return memo[n];
        } else {
            let result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
            return result;
        }
        // let result = memo[n];
        // if(typeof result !== 'number') {
        //     result = fib(n - 1) + fib(n - 2);
        //     memo[n] = result;
        // }
        // return result;
    }
    //return fib;
//} () )


console.log(fibMemo([0, 1]))
//[0, 1, 1, 2, 3, 5, 8, 13, 21]