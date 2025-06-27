/**
 * @param {number[]} nums
 * @return {number}
 */

// Bottom up Dynamic Programming
// Time and Space: O(n)
var maxSubArray = function(nums) {
    const n = nums.length;
    let max = nums[0]
    for (let i = 1; i < n; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(max, nums[i])
    }
    return max;
};