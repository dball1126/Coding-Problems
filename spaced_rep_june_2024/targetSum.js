/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let sum = nums.reduce((a, b) => a + b, 0)
  
    let target = (S + sum) / 2
  
    if (S > sum || (sum + S) % 2 == 1) return 0
  
    let r = nums.length
    let c = target
  
    let dp = new Array(r + 1).fill(0).map(() => new Array(c + 1).fill(0))
  
    for (let i = 0; i < dp.length; i++) dp[i][0] = 1
  
    for (let i = 1; i <= r; i++) {
      for (let j = 0; j <= c; j++) {
        if (nums[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]]
        } else {
          dp[i][j] = dp[i - 1][j]
        }
      }
    }
  
    return dp[dp.length - 1][dp[0].length - 1]
  }

console.log(findTargetSumWays([1,1,1,1,1], target = 3))