/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the
unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(array) {
   if(array.length === 0) {
       return 0;
   }
   let p1 = 0;
   for (let i = 1; i < array.length; i++) {
       if(array[p1] !== array[i]) {
           p1++;
           array[p1] = array[i];
       }
   }
   return p1 + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1, 1, 1, 2, 4, 4, 4, 5, 5, 8])); //5
console.log(countUniqueValues([]));// 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4





