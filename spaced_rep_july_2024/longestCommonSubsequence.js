// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var longestCommonSubsequence = function(text1, text2) { // top-down
    const n = text1.length, m = text2.length
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])
    const dp = (i, j) => {
        if (i >=n || j >= m) return 0
        if (memo[i][j] !== undefined) return memo[i][j]

        let v1 = text1[i] === text2[j] ? 1 + dp(i+1, j+1) : 0
        let v2 = dp(i+1, j), v3 = dp(i, j+1)
        return memo[i][j] = Math.max(v1,v2,v3)
    }
    return dp(0,0)
};
var longestCommonSubsequence = function(text1, text2) { // bottom-up
    const n = text1.length, m = text2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let v = text1[i-1] === text2[j-1] ? 1 + dp[i-1][j-1] : 0
            dp[i][j] = Math.max(v, dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[n][m]
}; console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace" ))
//                                               _ _ _            ___

