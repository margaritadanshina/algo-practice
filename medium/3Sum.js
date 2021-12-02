//given an integer array, return all triplets [array[i], array[j], array[k]] such that i != j, i != k, and j != k, and array[i] + array[j] + array[k] == 0


function threeSum(array) {
    let newArr = [];
    //sort the array
    array.sort((a, b) => a - b);

    //loop through the elements
    for(let i = 0; i < array.length; i++) {
        if(i !== 0 && array[i - 1] === array[i]) {
            continue;
        }
        //[-1, 0, 1, 2, -1, -4]
        //  i
        //    left
        //                  right
        let left = i + 1;
        let right = array.length - 1;
        while(left < right) {
            let sum = array[i] + array[left] + array[right];
            if(sum === 0) {
                newArr.push([array[i], array[left], array[right]]);
                left++;
                right--;
                while(left < right && array[left - 1] === array[left]) {
                    left++;
                }
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
