/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let r = n-1, l = m-1, p = nums1.length-1

    while (p >= 0) {
        if (r >= 0 && (nums2[r] >= nums1[l] || l === -1)) {
            [nums1[p] = nums2[r]] = [nums2[r], nums1[p]]
            r--
        } else {
            [nums1[p] = nums1[l]] = [nums1[l], nums1[p]]

            l--
        }
        p--
    }
    return nums1
};
console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))