/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])

    const dp = (i, j) => {
        if (i >= n || j >= m) return 0
        if (memo[i][j] !== undefined) return memo[i][j]
        let v1 = 0
        if (text1[i] === text2[j]) v1 = 1 + dp(i+1, j+1)
        let v2 = dp(i+1, j), v3 = dp(i, j+1)
        return memo[i][j] = Math.max(v1,v2,v3)
    }
    return dp(0,0)
};

var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length, max = 0
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j--) {
            let v1 = 0, v2  = 0, v3 = 0
            if (text1[i] === text2[j]) {
                v1 = 1
                if (i-1 >= 0 && j -1 >= 0) v1 += dp[i-1][j-1]
            }
            if (i-1 >= 0) v2 = dp[i-1][j]
            if (j-1 >= 0) v3 = dp[i][j-1]

            dp[i][j] = Math.max(v1,v2,v3)
        }
    }
    return max;
}