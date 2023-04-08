/**
 * nums(n) = Math.max(nums[i], nums[i] + maxSubArray(i+1))
 * Time O(n) we hit every index once
 * Space O(n) we can reuse the nums array
 */
// Top-Down
var maxSubArray = function(nums) {
    let max = -Infinity;
    const dp = (i) => {
        console.log("i " + i)
        if (i >= nums.length) return 0;
        nums[i] = Math.max(nums[i], nums[i] + dp(i+1))
        max = Math.max(max, nums[i])
        return nums[i]
    }
    dp(0)
    return max
};

// Bottom-Up
var maxSubArray = function(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(max, nums[i])
    }
    return max;
}

console.log(maxSubArray(nums =  [5,4,-1,7,8]))