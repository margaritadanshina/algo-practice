// You are given an integer array coins representing coins of different denominations and an integer
//amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money can not be made up by any combination of the coins, return -1.

// function coinChange(coins, amount) {
//     for(let i = 0; i < coins.length; i++) {
//         let coin = coins[i];
//     }
// }
console.log(linearSearch([10, 15, 20, 25, 30], 15))

function linearSearch(array, value){
    // add whatever parameters you deem necessary - good luck!
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        } 
    }
    return -1;
  }