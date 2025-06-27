/**
 * @param {number[]} nums
 * @return {boolean}
 */
//
var canPartition = function(nums) {
    let n = nums.length, half = nums.reduce((acc,v)=>acc+v)
    if (half & 1) return false
    half = Math.floor(half / 2)

    const dp = [...new Array(n+1)].map(a => [...new Array(half+1)].fill(false))
    for (let arr of dp) arr[0] = true;

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= half; c++) {
            if (c - nums[r-1] >= 0) {
                dp[r][c] = dp[r-1][c - nums[r-1]] || dp[r-1][c]
            } else {
                dp[r][c] = dp[r-1][c]
            }
        }
    }
    return dp[n][half]
};

var canPartition = function(nums) {
    let n = nums.length, half = nums.reduce((acc,v)=>acc+v)
    if (half & 1) return false
    half = Math.floor(half / 2)

    const dp = [...new Array(half+1)].fill(false)
    dp[0] = true;

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= nums[r-1]; c++) {
            if (c - nums[r-1] >= 0) {
                dp[c] = dp[c - nums[r-1]] || dp[c]
            }
        }
    }
    return dp[half]
};

console.log(canPartition([1,2,5]))