// given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//the overall run time complexity should be O(log (m+n))

function median(nums1, nums2){
    let nums = [...nums1, ...nums2].sort((a,b) => a - b);
    let len = nums.length;
    if(len % 2 == 0) {
        //index 1
        let left = len / 2 - 1;
        //index 2
        let right = len / 2;
        return (nums[left] + nums[right]) / 2;
    } else {
        let mid = (len - 1) / 2;
        return nums[mid];
    }
}


//console.log(median([1, 3], [2])) //2
console.log(median([1, 2], [3, 4])) //2.5
console.log(median([0, 0], [0, 0])) //0
