/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)])
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            dp[i][j] = i+j
        }
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(1 + dp[i-1][j],1 + dp[i][j-1], 2 +dp[i-1][j-1])
            }
        }
    }
    return dp[n][m]
};
console.log(minDistance( word1 = "a", word2 = "ba")) // = 1