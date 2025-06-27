/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    const dp = [...new Array(n+2)].map(a => [...new Array(m+2)].fill(0))
    // for (let r = 0; r < n; r++) {
    //     for (let c = 0; c < m; c++) {
    //         if (c === 0 || r === 0) {
    //             dp[r][c] = 1
    //         }
    //     }
    // }
    // dp[0][0] = 0
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            let v = Infinity, v2 = dp[r-1][c] + 1, v3 = dp[r][c-1] + 1
            if (word1[r] === word2[c]) {
                dp[r][c] = dp[r-1][c-1]
            } else {

                dp[r][c] = Math.min(v, v2, v3)
            }
        }
    }

    console.log(dp)
    return dp[n-1][m]
};
console.log(minDistance(word1 = "aaa", word2 = "aaa"))