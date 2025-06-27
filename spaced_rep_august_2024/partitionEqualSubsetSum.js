/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let n = nums.length, sum = nums.reduce((acc,v)=>acc+v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2)
    const dp = [...new Array(n+1)].map(a => [...new Array(sum+1)].fill(false))

    for (let arr of dp) arr[0] = true

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= sum; c++) {
            dp[r][c] = dp[r-1][c] || dp[r][c]
            if (c - nums[r-1] >= 0) {
                dp[r][c] = dp[r-1][c] || dp[r-1][c - nums[r-1]]
            }
        }
    }
    return dp[n][sum]
};
console.log(canPartition([1,2,5]))