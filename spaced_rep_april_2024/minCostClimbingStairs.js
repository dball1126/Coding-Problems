/**
 * @param {number} n
 * @return {number}
 */
// Top-down dynamic programming
// Time & Space: O(n)
var climbStairs = function(n) {
    let memo = [...new Array(n)]

    const dp = (t) => {
        if ( t === 0) return 1;
        if (t < 0) return 0

        if (memo[t] !== undefined) return memo[t]
        memo[t] = 0
        if ((t - 1) >= 0) memo[t] += dp(t-1)
        if ((t - 2) >= 0) memo[t] += dp(t-2)
        return memo[t]
    }
    return dp(n)
};
console.log(climbStairs(2))