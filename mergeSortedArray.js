// Time: O(n + m)...for nums1, nums2 
// Space: O(m) 
var merge = function(nums1, m, nums2, n) {
    let arr = []
    for(let i = 0; i < m; i++) {
        arr.push(nums1[i])
    }
    for(let i = 0; i < nums1.length; i++) {
        if (arr[0] === undefined) {
            nums1[i] = nums2.shift();
        } else if (nums2[0] === undefined) {
            nums1[i] = arr.shift()
        } else if (arr[0] <= nums2[0]) {
            nums1[i] = arr.shift() 
        } else {
            nums1[i] = nums2.shift()
        }
    }
    return nums1
};
console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
