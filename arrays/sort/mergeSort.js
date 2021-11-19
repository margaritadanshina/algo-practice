function mergeSort(array) {
    if(array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);
    return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf) {
    const sortedArray = new Array(leftHalf.length + rightHalf.length);
    let k = 0;
    let i = 0;
    let j = 0;
    //while there are still elements in the arrays
    while(i < leftHalf.length && j < rightHalf.length) {
        if(leftHalf[i] <= rightHalf[j]) {
            sortedArray[k++] = leftHalf[i++];
        } else {
            sortedArray[k++] = rightHalf[j++];
        }
    }
    while(i < leftHalf.length) {
        sortedArray[k++] = leftHalf[i++];
    }
    while(j < rightHalf.length) {
        sortedArray[k++] = rightHalf[j++];
    }
    return sortedArray;
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));


//easier solution 

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right); 
}

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    //checking whether there are elements in both arrays
    while(i < arr1.length && j < arr2.length) {
        // [1, 10, 50]   [2, 14, 99, 100]
        // [1]
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            //then move onto the next element by incrementing i
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}


