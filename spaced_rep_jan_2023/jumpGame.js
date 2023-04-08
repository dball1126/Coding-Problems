var canJump = function(nums) {
    if (nums.length <= 1) return true;
    if (nums[0] === 0) return false;
    let dp = [...new Array(nums.length+1)]
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] -1, nums[i])
        if (dp[i] === 0 && (i !== nums.length-1)) return false
    }
    return true
};

console.log(canJump([2,2,1,0,4]))