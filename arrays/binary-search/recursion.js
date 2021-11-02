
/*function binarySearchRec(arr, target, start, end){
    // let start = 0;
    // let end = arr.length - 1;
    //base case - if starting index is greater than ending index, return false
    if(start > end) {
        return false;
    }
    //compute the middle index
    let mid = Math.floor(arr.length / 2);
    //compare the middle element with number x. If equal return true.
    if(arr[mid] == target) {
        return true;
    }
    //if greater, call the same function with ending index = middle - 1 and repeat step 1.
    if(arr[mid] > target) {
        return binarySearchRec(arr, target, start, mid - 1);
    } else {
        //if smaller, call the same function with starting index = middle + 1 and repeat 1.
        return binarySearchRec(arr, target, mid + 1, end);
    }
}

console.log(binarySearchRec([2, 4, 6, 7, 8, 9], 8))
*/

function binarySearchRec(arr, target) {
    let mid = Math.floor(arr.length / 2);
    //base case: if arr has only 1 el and it is not equal to the target - return false
    if(arr.length === 1 && arr[0] != target) {
        return false;
    }
    if(arr[mid] === target) {
        return mid;
    } else if(arr[mid] > target) {
        return binarySearchRec(arr.slice(0, mid), target);
    } else if(arr[mid] < target) {
        // check the index of the element
        return mid + binarySearchRec(arr.slice(mid, arr.length), target);
    }
} 

console.log(binarySearchRec([2, 3, 4, 5, 6, 7, 8], 3))