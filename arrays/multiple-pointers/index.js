/* write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

// naive approach time - O(N^2) - nested for loop / space - O(1)

/* function sumZero(array) {
    for(let i = 0; i < array.length; i++) {
        for(j + 1; j < array.length; j++){
            if(array[i] + array[j] === 0) {
                return [array[i]; array[j]];
            }
        }
    }
}
*/


function sumZero(array) {
    p1 = array[0];
    p2 = array.length - 1; 
    while( p1 < p2) {
        let sum = array[p1] + array[p2];
        if(sum === 0) {
            return [array[p1], array[p2]];
        } else if (sum > 0) {
            p2--;
        } else {
            p1++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3; 3]
console.log(sumZero([ -2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); //undefined

