//binary search algorithm

//Time O (log n)
//Space

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        //assign a middle of the array
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        //start checking the right side of the array
        if(arr[mid] < target) {
            low = mid + 1;
        }
        //otherwise checking the left side
        if(arr[mid] > target) {
            high = mid - 1;
            //return arr[high];
        } 
    } 
    return none; 
}

arr = [1, 2, 3, 4, 5, 6];
target = 1;
console.log(binarySearch(arr, target))
