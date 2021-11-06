function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    //two loop are much faster - O2(n) = O(n);
    for(let el of arr1) {
        counter1[el] = (counter1[el] || 0) + 1;
    }
    for(let el of arr2) {
        counter2[el] = (counter2[el] || 0) + 1;
    }
    for(let key in counter1) {
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2], [4, 9, 1]));