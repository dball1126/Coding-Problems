/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top Down
// var findTargetSumWays = function(nums, target) {
//     let n = nums.length
//     let sum = nums.reduce((acc, v) => acc + v, 0)
//     if (sum < Math.abs(target)) return 0
//     target += sum
//     if (target & 1) return 0
//     target = Math.floor(target / 2)

//     let memo = [...new Array(n+1)].map(a => [...new Array( target + 1)])

//     const dp = (idx, t) => {
//         if (idx < 0) return t === 0 ? 1 : 0
//         if (memo[idx][t] !== undefined) return memo[idx][t]

//         let v1 = dp(idx -1, t), v2 = dp(idx - 1, t - nums[idx])

//         return memo[idx][t] = v1 + v2
//     }
//     return dp(n-1, target)
// };

// Bottom-Up Dynamic Programming
// Converted to 0/1 Knapsack (Bounded) DP Problem
// Time and Space: O(n * m)...n for length of nums and m for half the total sum
var findTargetSumWays = function(nums, target) {
    let n = nums.length
    let sum = nums.reduce((acc, v) => acc + v, 0)
    if (sum < Math.abs(target)) return 0
    target += sum
    if (target & 1) return 0
    target = Math.floor(target / 2)

    const dp = [...new Array(n+1)].map(a => [...new Array( target + 1)].fill(0))
    let row = dp.length, column = dp[0].length
    for (let arr of dp) arr[0] = 1;

    for (let r = 1; r < row; r++) { 
        for (let c = 0; c < column; c++) {

            dp[r][c] = dp[r-1][c]

            if (c - nums[r - 1] >= 0) {
                dp[r][c] += dp[r-1][c - nums[r-1]]
            }
        }
    }
    return dp[row-1][column-1]  // last two indexes
}
console.log(findTargetSumWays([1,1,1,1,1], target = 3)) // = 5

