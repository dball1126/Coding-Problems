/**
 * @param {number[]} nums
 * @return {number}
 */

// Bottom-Up Dynamic Programming
// Kadane's Algorithm DP Pattern.
// Time: O(n)
// Space: O(1)
var maxProduct = function(nums) {
    if (!nums.length) return 0
    let n = nums.length, max = nums[0], prev1 = nums[0],prev2 = nums[0]
    
    for (let i = 1; i < n; i++) {
        let temp1 = prev1
        prev1 = Math.max(nums[i], prev1 * nums[i], prev2 * nums[i])
        prev2 = Math.min(nums[i], prev2 * nums[i], temp1 * nums[i])
        max = Math.max(max, prev1, prev2)
    }
    return max
};
console.log(maxProduct([-4,-3,-2]))