/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Edit Distance DP Pattern
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var minDistance = function(word1, word2) {
    if (!word1.length || !word2.length) return Math.max(word1.length, word2.length)
    let n = word1.length, m = word2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))
    for (let i = 0; i < n; i++) dp[i][0] = i;
    for (let i = 0; i < m; i++) dp[0][i] = i;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            let v1 = Infinity, v2 = 1 + dp[i-1][j], v3 = 1 + dp[i][j-1]
            if (word1[i-1] === word2[j-1]) {
                v1 = dp[i-1][j-1]
            } else {
                v1 = 1 + dp[i-1][j-1]
            }
            dp[i][j] = Math.min(v1,v2,v3)
        }
    }

    return dp[n][m] === Infinity ? 0 : dp[n][m]
}
console.log(minDistance(word1 = "sea", word2 = "ea")) // = 1 (remove s)

