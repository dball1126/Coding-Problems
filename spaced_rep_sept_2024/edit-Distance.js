/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(w1, w2) {
    if (!w1 || !w2) return Math.max(w1.length, w2.length)
    let n = w1.length, m = w2.length

    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))
    for (let i = 0; i <= n; i++) {
        dp[0][i] = i; dp[i][0] = i
    }

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            let v1 = dp[r-1][c] + 1, v2 = dp[r][c-1] + 1, v3 = dp[r-1][c-1] + 1
            if (w1[r-1] === w2[c-1]) {
                v3 = dp[r-1][c-1]
            }
            dp[r][c] = Math.min(v1,v2,v3)
        }   
    }
    return dp[n][m]
};
console.log(minDistance(word1 = "intention", word2 = "execution"))