//given an integer array, return all triplets [array[i], array[j], array[k]] such that i != j, i != k, and j != k, and array[i] + array[j] + array[k] == 0

//O(2^n) O(n)
function threeSum(array) {
    let newArr = [];
    //sort the array
    array.sort((a, b) => a - b);

    //loop through the elements
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        //[-1, 0, 1, 2, -1, -4]
        //  i
        //    left
        //                  right
        let left = i + 1;
        let right = array.length - 1;
        while(left < right) {
            let sum = element + array[left] + array[right];
            
            if(sum === 0) {
                newArr.push([element, array[left], array[right]]);
                left++;
                right--;
                // while(left < right && array[left - 1] === array[left]) {
                //     left++;
                // }
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }    
    }
    return newArr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([]))
console.log(threeSum([0]))


function fizzBuzz() {
    for(let i = 0; i <= 100; i++) {
    if(i % 15 === 0) {
        console.log('FizzBuzz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz')
    }

else console.log(i);
}
}
fizzBuzz()