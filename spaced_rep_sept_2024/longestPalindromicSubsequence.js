/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length
    const dp = [...new Array(n+1)].map(a => 
               [...new Array(n+1)].fill(1))

    for (let i = 1; i < n; i++) {
        for (let j = i-1; j >= 0; j--) {
            let v1 = dp[j+1][i], v2 = dp[j][i-1], v3 = 0
            if (s[i] === s[j]) {
                if (j+1 < i) {
                    v3 = 2 + dp[j+1][i-1]
                } else {
                    v3 = 2
                }
            }
            dp[j][i] = Math.max(v1,v2,v3)
        }
    }
    return dp[0][n-1]
};
console.log(longestPalindromeSubseq("bbbab"))
