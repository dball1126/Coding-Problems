/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--; n--;
    let idx = nums1.length-1
    while (m >= 0 || n >= 0) {
        const v1 = m >= 0 ? nums1[m] : -Infinity;
        const v2 = n >= 0 ? nums2[n] : -Infinity;
        if (n < 0 || v1 >= v2) {
            [nums1[m], nums1[idx]] = [nums1[idx], nums1[m]]
            m--
        } else {
            [nums2[n], nums1[idx]] = [nums1[idx], nums2[n]]
            n--
        }
        idx--;
    }
};
console.log(merge(nums1 =[0,0,3,0,0,0,0,0,0], m = 3, nums2 = [-1,1,1,1,2,3], n = 6))