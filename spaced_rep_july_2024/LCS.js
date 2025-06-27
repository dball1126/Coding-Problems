/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    const dp = [...new Array(n+1)].map(a => 
               [...new Array(m+1)].fill(0))
    for (let i = n-1; i >= 0; i--) {
        for (let j = m-1; j >= 0; j--) {
            let v1 = 0, v2 = dp[i+1][j], v3 = dp[i][j+1]
            if (text1[i] === text2[j]) v1 = 1 + dp[i+1][j+1]
            dp[i][j] = Math.max(v1,v2,v3)
        }
    }
    return dp[0][0]
};
console.log(longestCommonSubsequence("ab", "cab"))