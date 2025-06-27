/**
 * @param {number[]} nums
 * @return {number}
 */
// Expand from centers
// Time: O(n^2)
// Space: O(1)
var maxWidthRamp = function(nums) {
    let n = nums.length, max = 0

    for (let i = 0; i < n; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] <= nums[i]) {
                max = Math.max(max, i- j)
            }
        }
    }
    return max
};
console.log(maxWidthRamp(  [6,0,8,2,1,5]))

