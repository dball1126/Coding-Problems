/**
 * @param {number} n
 * @return {number}
 */
// Catalan Numbers
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space O(n)
var numTrees = function(n) {
    let memo = [...new Array(n+1)]
    const dp = (num) => {
        if (memo[num] !== undefined) return memo[num]
        if (num <= 1) return 1;
        memo[num] = 0
        for (let i = 1; i <= num; i++) {
            memo[num] += dp(i-1) * dp(num - i)
        }
        return memo[num]
    }
    return dp(n)
};
console.log(numTrees(3))