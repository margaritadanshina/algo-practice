

function coinChange(denom, amount) {
    let count = 0;
    let newAmount = amount;
    for(let i = 0; i < denom.length; i++) {
        while (denom[i] <= newAmount) {
            count++;
            newAmount -= denom[i];
        }
    }
    return count;
}

// function coinChange(denoms, amount) {
//     var count = 0;
//     for (var i = 0; i < denoms.length; i++) {
//       count += Math.floor(amount/denoms[i]);
//       amount %= denoms[i];
//     }
//     return count;
//     }
    

console.log(coinChange([25, 10, 5, 1], 5))
console.log(coinChange([25, 10, 5, 1], 20))
