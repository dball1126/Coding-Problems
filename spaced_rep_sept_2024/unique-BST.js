/**
 * @param {number} n
 * @return {number}
 */
// Catalan Numbers DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var numTrees = function(n) {
    
    const dp = [...new Array(n+1)].fill(0);
    dp[0] = 1; dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            let left = dp[j-1]
            let right = dp[i-j]

            dp[i] += (left * right)
        }
    }
    return dp[n]
};
console.log(numTrees(3)) // = 5


