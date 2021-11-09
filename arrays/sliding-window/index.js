/*
write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elementa in the array. 
*/

//time - O(n^2)

// function maxSubarraySum(arr, n) {
// if(n > arr.length) {
//     return null;
// }
// //global property - is a numeric value representing infinity
//     let max = -Infinity;
//     // the loop will start at the length of the arr - n number of el, so that it doesn't add up to the less els than we have left
//     for(let i = 0; i < arr.length - n + 1; i++) {
//         tempSum = 0;
//         //loop for adding n elements together
//         for(let j = 0; j < n; j++) {
//             tempSum += arr[i + j];
//         }
//         if(tempSum > max) {
//             max = tempSum;
//         }
//     }
//     return max;
// }

//refactored

//time = O(n)

function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;
    for(let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    //[1, 2, 5, 2, 8, 1, 5], 2

    //tempSum = 3
    //tempSum = 7
    //tempSum = 7 
    //tempSum = 10
    //tempSum = 9
    //tempSum = 6

    tempSum = maxSum;
    //loop started at the second 2
    for(let i = n; i < arr.length; i++) {
        // 3 - 1 + 5 = 7
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}



console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubarraySum([], 4)) //null


