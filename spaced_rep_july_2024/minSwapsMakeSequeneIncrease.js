/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    let count =0
    let i = 0, n = nums1.length;
    while (i < n) {
        let nx1 = nums1[i+1] || Infinity, nx2 = nums2[i+1] || Infinity
        let curr1 = nums1[i], curr2 = nums2[i]
        if (curr1 >= nx1 || curr2 >= nx2) {
            [nums1[i], nums2[i]] = [[nums2[i]], nums1[i]]
            count++
        }
        i++
    }
    return count
};
console.log(minSwap([0,3,5,8,9], nums2 = [2,1,4,6,9]))