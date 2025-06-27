// Merge Sorted Arrays
// Time: O(n + m)
// Space: O(1)
var merge = function(nums1, m, nums2, n) {
    let idx = nums1.length-1;
    m-=1; n-=1;
    while (m >= 0 || n >= 0) {
        if (m < 0 || (n >= 0 && nums2[n] >= nums1[m])) {
            [nums1[idx], nums2[n]] = [nums2[n], nums1[idx]];
            n--;
        } else if (n < 0 || (m >= 0 && nums1[m] >= nums2[n])) {
            [nums1[idx], nums1[m]] = [nums1[m], nums1[idx]];
            m--;
        }
        idx--;
    }
    return nums1
};
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1))