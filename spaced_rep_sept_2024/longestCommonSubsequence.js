/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Longest Common Subsequence DP Pattern
// Bottom-Up Dyanmic Programming
// Time and Space: O(n * m)
var longestCommonSubsequence = function(s1, s2) {
    let n = s1.length, m = s2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            let v1 = dp[r-1][c], v2  = dp[r][c-1], v3 = 0
            if (s1[r-1] === s2[c-1]) {
                v3 = 1 + dp[r-1][c-1]
            }
            dp[r][c] = Math.max(v1,v2,v3)
        }
    }
    return dp[n][m]
};
console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace" ))