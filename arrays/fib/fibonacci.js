
//time O(2^N) space O(n)
// function fib (n) {
//     if (n <= 1) return n;
//     else return fib(n - 1) + fib(n - 2);
// }

//time O(n) space O(n)

    //memo - is an obj to remember the results of previous operations
    // function fib (n, memo = {1: 0, 2: 1}) {
    //     if(n in memo) {
    //         return memo[n];
    //     } else {
    //         memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    //         return memo[n]
    //     } 
    // }

//the most optimal solution
//time O(n) space O(1)

function nthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while(counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;    
    }
    if(n > 1) {
        return lastTwo[1]
    } else {
        return lastTwo[0]
    }
    //return n > 1 ? lastTwo[1] : lastTwo[0];
}

//console.log(fib(0))
//[0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(nthFib(2))