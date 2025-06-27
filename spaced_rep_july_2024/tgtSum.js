/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Bottom Up Dynamic Programming ( 0/1 Knapsack )
// Time && Space: O(n * m)...n for # of nums...m for half of total sum + target
var findTargetSumWays = function(nums, target) {
    let n = nums.length, half = nums.reduce((acc,v)=>acc+v) + target
    if (half & 1 || half < 0) return 0 // if odd return zero
    half = Math.floor( half / 2 )

    const dp = [...new Array(n+1)].map(a => [...new Array(half+1)].fill(0))
    for (let arr of dp) arr[0] = 1;

    for (let r = 1; r <= n; r++) {
        for (let c = 0; c <= half; c++) {
            dp[r][c] = dp[r-1][c] // grab the previous result
            if (c - nums[r-1] >= 0) {
                dp[r][c] += dp[r-1][c - nums[r-1]]
            }
        }
    }
    return dp[n][half]
};
console.log(findTargetSumWays(nums = [1000], target = -1000))// = 5


