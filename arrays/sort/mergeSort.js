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
