/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(w1, w2) {
    let n = w1.length, m = w2.length;

    const dp = [...new Array(n+1)].map(a =>[...new Array(m+1)].fill(0))
    for (let arr of dp) arr[0] = 0

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            let v1 = dp[r-1][c], v2 = dp[r][c-1], v3 = 0
            if (w1[r-1] === w2[c-1]) {
                v3 = dp[r-1][c-1] + 1
            }
            dp[r][c] = Math.max(v1,v2,v3)
        }
    }
    return dp[n][m]
};
console.log(longestCommonSubsequence(text1 = "abc", text2 = "abc"))