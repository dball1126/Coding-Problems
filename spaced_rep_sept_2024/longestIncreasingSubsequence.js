/**
 * @param {number[]} nums
 * @return {number}
 */
// Longest Increasing Subsequence DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var lengthOfLIS = function(nums) {
    let n = nums.length, max = 1
    const dp = [...new Array(n+1)].fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max;
};
console.log(lengthOfLIS( [7,7,7,7,7,7,7]))