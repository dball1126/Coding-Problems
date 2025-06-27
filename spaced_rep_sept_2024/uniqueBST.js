/**
 * @param {number} n
 * @return {number}
 */
// Catalan Numbers DP Pattern
// Bottom-Up Dynamic Programming
// TIme & Space: O(n)
var numTrees = function(n) {
    
    const dp = [...new Array(n+1)].fill(0)
    dp[0] = 1; dp[1] = 1

    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= n; j++) {
            dp[j] += (dp[j-1] * dp[i - j])
        }
    }
    console.log(dp)
    return dp[n]
};
console.log(numTrees(3))