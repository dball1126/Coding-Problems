/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let n = nums.length, sum = nums.reduce((acc,v)=>acc+v) + target
    if (sum & 1) return 0
    sum = Math.floor(sum / 2)
    const dp = [...new Array(n+1)].map(a=> [...new Array(sum+1)].fill(0))
    for (let arr of dp) arr[0] = 1;

    for (let i = 1; i <= n; i++) {
            for (let a = 0; a <= sum; a++) {
            dp[i][a] = dp[i-1][a]

            if (a - nums[i-1] >= 0 ) {
                dp[i][a] += dp[i-1][a - nums[i-1]]
            }
        }
    }
    console.log(dp)
    return dp[n][sum]
};
console.log(findTargetSumWays([1,1,1,1,1],3))