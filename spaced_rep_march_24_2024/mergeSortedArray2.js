/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1
    let idx = nums1.length-1
    while (idx >= 0) {
        if (i >= 0 && nums1[i] >= nums2[j]) {
            nums1[idx] = nums1[i]
            i--
        } else if (j >= 0){
            nums1[idx] = nums2[j]
            j--
        }
        idx--
    }
    return nums1
};
console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
/** i = 2  j = 0   idx = 5
 *  [1,2,0,3,5,6]
 *       [2,5,6]
 * 
 */