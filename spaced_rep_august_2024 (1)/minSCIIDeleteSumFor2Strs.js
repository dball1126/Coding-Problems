/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let n = s1.length, m = s2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)])
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0
            } else {
                dp[i][j] =  0
                let v1 = 0, v2 = 0
                if (i !== 0 && i !== n) {
                    v1 = s1[i-1].charCodeAt() 
                }
                if (j !== 0 && j !== m) {
                    v2 = s2[j-1].charCodeAt() 
                }
                dp[i][j] = v1 + v2
            }
        }
    }
    console.log(dp)

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let v1 = Infinity, v2 = Infinity, v3 = Infinity
            if (s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(s1[i-1].charCodeAt() + dp[i][j-1], s2[j-1].charCodeAt() + dp[i-1][j],  s1[i-1].charCodeAt() + s2[j-1].charCodeAt() + dp[i-1][j-1])
            }
        }
    }
console.log(dp)
    return dp[n][m]
};
console.log(minimumDeleteSum("sea", s2 = "eat"))