/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    const memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (i, j) => {
        if (i >= n || j >= m) return 0
        if (memo[i][j] !== undefined) return memo[i][j]
        if (text1[i] === text2[j]) {
            return memo[i][j] = Math.max(1 + dp(i+1,j+1), dp(i,j+1), dp(i+1,j))
        } else {
            return memo[i][j] = Math.max(dp(i+1,j), dp(i,j+1))
        }
    }

    return dp(0, 0)
};
console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace" ))