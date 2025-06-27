/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Longest Common Subsequence DP Pattern
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var minDistance = function(w1, w2) {
    let n = w1.length, m = w2.length
    const dp = [...new Array(n+1)].map(a => 
               [...new Array(m+1)].fill(Infinity)) // base case
    for (let i = 0; i <= n; i++) dp[i][0] = i // base case
    for (let i = 0; i <= m; i++) dp[0][i] = i // base case

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {

            let v1 = Infinity, v2 = dp[r-1][c] + 1, v3 = dp[r][c-1] + 1
            if (w1[r-1] === w2[c-1]) v1 = dp[r-1][c-1]

            dp[r][c] = Math.min(v1,v2,v3)
        }
    }
    return dp[n][m]
};
console.log(minDistance(word1 = "a", word2 = "b")) 
// = 2 (delete 's' and add 't' to word1 "sea" = eat which equals word2("eat"))

