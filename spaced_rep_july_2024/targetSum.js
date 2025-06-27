/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((acc, v) => acc + v, 0)
    sum += target
    if (sum & 1) return 0
    sum = Math.floor(sum / 2)
    const dp = [...new Array(nums.length+1)].map(a => [...new Array(sum +1)].fill(0))
    for (let arr of dp) arr[0] = 1

    for (let i = 1; i < dp.length; i++) {
        for (let a = 0; a < dp[i].length; a++) {
            dp[i][a] = dp[i-1][a]
            if (a - nums[i-1] >= 0) {
                dp[i][a] += dp[i-1][a - nums[i-1]]
            }
        }
    }
    console.log(dp)
    return dp[dp.length-1][dp[0].length - 1]
};
console.log(findTargetSumWays(nums = [1,1,1,1,1], target = 3))