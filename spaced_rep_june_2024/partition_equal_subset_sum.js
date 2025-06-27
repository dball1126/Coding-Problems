/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v, 0)
    if (sum & 1) return false
    sum = Math.floor(sum / 2)
    let dp = [...new Array(nums.length+1)].map(a=> [...new Array(sum+1)].fill(false))
    for (let arr of dp) arr[0] = true

    for (let r = 1; r < dp.length; r++) {
        for (let c = 0; c < dp[r].length; c++) {
            if (c - nums[r-1] >= 0) {
                dp[r][c] = dp[r-1][c - nums[r-1]] ||  dp[r-1][c]
            } else {
                dp[r][c] = dp[r-1][c]
            }
        }
    }

    return dp[dp.length-1][dp[0].length-1]
};
console.log(canPartition([1,2,3,5]))