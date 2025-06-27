/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var lengthOfLIS = function(nums) {
    let max = -Infinity, n = nums.length;
    const dp = [...new Array(n+1)].fill(1)
    dp[0] = 1

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < r; c++) { // c does not exceed r.

            if (nums[r] > nums[c]) {
                dp[r] = Math.max(dp[r], dp[c] + 1)
            }

        }
        max = Math.max(dp[r], max)
    }
    return max;
};
console.log(lengthOfLIS(nums = [10,9,2,5,3,7,101,18])) // = 4


