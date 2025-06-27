/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// In-place index replacement
// Time: O(m + n)
// Space: O(1)
var merge = function(nums1, m, nums2, n) {
    let idx = 0
    for (let i = 0; i < nums1.length; i++) {
        const v = nums1[i];
        if (idx < n && (nums2[idx] < v || v === 0)) {
            [nums1[i], nums2[idx]] = [nums2[idx], nums1[i]]
            
            if (v === 0) {
                idx++
            } else if (idx+1 < n && nums2[idx+1] < nums2[idx]) {
                 [nums2[idx+1], nums2[idx]] = [nums2[idx], nums2[idx+1]]

            }
        }
    }
    return nums1
};
console.log(merge(nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3))
// 