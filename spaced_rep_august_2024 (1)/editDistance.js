/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(s1, s2) {
    let n = s1.length, m = s2.length

    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))

    for (let i = 0; i < n; i++) dp[i][0] = i
    for (let i = 0; i < m; i++) dp[0][i] = i

    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            let v1 = Infinity, v2 = Infinity, v3 = Infinity, v4 = Infinity
            if (s1[r-1] === s2[c-1]) {
                v1 = dp[r-1][c-1]
            } else {
                v2 = 1 + dp[r-1][c]
                v3 = 1 + dp[r][c-1]
                v4 = 1 + dp[r-1][c-1]

            }
          
            dp[r][c] = Math.min(v1,v2,v3,v4)
        }
    }

    return dp[n][m]
};
console.log(minDistance(word1 = "horse", word2 = "ros"))