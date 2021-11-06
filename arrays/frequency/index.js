//write a function which accepts two arrays. The function should return true if every value in the array has it's
//corresponding value squared in the second array. The frequency of values must be the same. 

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        //corresponding index is not in the another arr
        if(correctIndex === -1) {
            return false;
        }
        //we remove the correspondent index from the other array, and check other elements
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([1, 2, 3], [4, 9, 1]));
console.log(same([1, 2], [4, 9, 1]))
console.log(same([1, 2, 0], [4, 9, 1]))
