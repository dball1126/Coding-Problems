/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((acc,v)=> acc +v) + target
    if (sum & 1 || sum < 0) return 0
    sum = Math.floor(sum / 2)
    let dp = [...new Array(nums.length+1)].map(a => [...new Array(sum+1)].fill(0))
    for (let arr of dp) arr[0] = 1

    for (let r = 1; r < dp.length; r++) {
        for (let c = 0; c < dp[r].length; c++) {
            let prev = dp[r-1][c], curr = 0
            if (c - nums[r-1] >= 0) {
                curr = dp[r-1][c - nums[r-1]]
            }
            dp[r][c] = (prev + curr)
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};
console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], target = 1))