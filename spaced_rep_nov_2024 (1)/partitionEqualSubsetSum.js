/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)....n for # of nums and m for half the sum of nums
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v), n = nums.length;
    if (sum & 1) return false;
    sum = Math.floor(sum / 2);

    let dp = [...new Array(n+1)].map(a => 
             [...new Array(sum+1)].fill(false))
    for (let arr of dp) arr[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sum; j++) {

            if (j - nums[i - 1] >= 0) {
                dp[i][j] = dp[i-1][j - nums[i - 1]]
            }
            dp[i][j] = dp[i-1][j] || dp[i][j]
        }
    }
    return dp[n][sum]
};
console.log(canPartition([1,5,11,5])) // = true

