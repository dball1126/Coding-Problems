/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Merge Arrays In-Place 
// Time: O(n)
// Space: O(1)
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, k = nums1.length-1

    while (i >= 0 || j >= 0) {
         if (j < 0 || nums1[i] >= nums2[j]) {
            [nums1[i], nums1[k]] = [nums1[k], nums1[i]]
            i--
        } else {
            [nums2[j], nums1[k]] = [nums1[k], nums2[j]]
            j--
        }
        k--
    }
    return nums1
};
console.log(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))// = [ 1, 2, 2, 3, 5, 6 ]


