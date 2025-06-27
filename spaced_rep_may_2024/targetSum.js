/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)...n for nums and m for target
var findTargetSumWays = function(nums, target) {
    let n = nums.length
    let memo = new Map()

    const dp = (idx, t) => {
        if (idx === n && t === 0) return 1;
        if (idx >= n) return 0;
        let k = idx + ":" + t
        if (memo.has(k)) return memo.get(k)

        let v = dp(idx+1, t + nums[idx]) + dp(idx+1, t - nums[idx])
        memo.set(k, v)
        return v
    }

    return dp(0, target)
};

var findTargetSumWays = function(nums, target) {
    let n = nums.length;

    // Initialize a 2D array to store results of subproblems
    let dp = new Array(n + 1).fill(0).map(() => new Array(2001).fill(0));
    dp[n][1000] = 1; // Base case: When there are no elements left, and the target is 0

    // Iterate over each element in nums and compute results iteratively
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= 2000; j++) {
            if (dp[i + 1][j]) {
                dp[i][j + nums[i]] += dp[i + 1][j];
                dp[i][j - nums[i]] += dp[i + 1][j];
            }
        }
    }

    // Return the result from the table
    return target + 1000 <= 2000 ? dp[0][target + 1000] : 0;
};

console.log(findTargetSumWays([1,1,1,1,1],3))