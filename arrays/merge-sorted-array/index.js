// Brutal force

function merge(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    return nums1.sort((a,b) => a - b)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));