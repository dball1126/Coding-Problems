/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(0))
    dp[m-1][n-1] = 1

    for (let r = m-1; r >= 0; r--) {
        for (let c = n-1; c >= 0; c--) {
            if (r === m-1 && c === n-1) continue;

            dp[r][c] += (dp[r+1][c] + dp[r][c+1])
        }
    }
    return dp[0][0]
};
console.log(uniquePaths( m = 3, n = 7))