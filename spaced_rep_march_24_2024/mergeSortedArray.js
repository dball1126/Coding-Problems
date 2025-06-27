/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = 0, j = 0
    let n = nums1.length
    while (i < m && j < n) {
        let last = nums1[n-1]
        if (last !== 0 && last < nums1[i]) {
            [nums1[i], nums1[n-1]] = [nums1[n-1], nums1[i]]
        }
        if (nums2[j] <= nums1[i]) {
            [nums1[i], nums1[n-1]] = [nums1[n-1], nums1[i]]
            nums1[i] = nums2[j]
            j++; i++
        } else {
            i++
        }
    }

};