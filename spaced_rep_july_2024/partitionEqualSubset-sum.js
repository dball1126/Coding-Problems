/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let n = nums.length, half = nums.reduce((acc, v)=> + acc + v)    
    if (half & 1) return false;
    half = Math.floor(half / 2)
    let dp = [...new Array(half+1)].fill(false)
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let t = 1; t <= half; t++) {
            if (t - nums[i-1] >= 0) {
                dp[t] =  dp[t - nums[i-1]] || dp[t]
            } else {
                dp[t] = dp[t]
            }
        }
    }
    console.log(dp)
    return dp[half]
};
console.log(canPartition([1,5,11,5]))