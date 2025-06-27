/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// 0/1 Knapsack (Bounded)
// Time And Space: O(n * m)...n for length of nums and m for half the total sum
var canPartition = function(nums) {
    
    let sum = nums.reduce((acc, v) => acc + v, 0), n = nums.length

    if (sum & 1) return false
    sum = Math.floor(sum / 2)
    const dp = [...new Array(n+1)].map(a => [...new Array( sum + 1)].fill(false))

    for (let arr of dp) arr[0] = true; // base case

    const row = dp.length, column = dp[0].length; 

    for (let r = 1; r < row; r++) {

        for (let c = 0; c < column; c++) {

            if (c - nums[r - 1] >= 0) {
                dp[r][c] = dp[r-1][c] || dp[r-1][c - nums[r - 1]]
            } else {
                dp[r][c] = dp[r-1][c]
            }
        }
    }
    return dp[row-1][column-1]
};
console.log(canPartition(nums = [1,5,11,5])) // true

