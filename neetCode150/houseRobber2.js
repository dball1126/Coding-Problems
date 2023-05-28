/**
 * @param {number[]} nums
 * @return {number}
 */

// Dynamic Programming
// Time and Space: O(n)
var rob = function(nums) {
    let val = -Infinity
    let dp = [...new Array(nums.length+1)]
    if (nums.length === 1) return nums[0]    
    if (nums.length === 2) return Math.max(nums[0], nums[1])   
    if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2])   
    dp[0] = nums[0]; dp[1] = nums[1]
    dp[1] = Math.max(nums[1], nums[0])
    for (let i = 2; i < nums.length-1; i++) {
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
        val = Math.max(val, dp[i])
    }
    dp = [...new Array(nums.length+1)].fill(0)
    dp[1] = nums[1]; dp[2] = nums[2]
    dp[2] = Math.max(nums[1], nums[2])

    for (let i = 3; i < nums.length; i++) {
          dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
        val = Math.max(val, dp[i])
    }
    return val
};
console.log(rob([1,2,3])) // = 3