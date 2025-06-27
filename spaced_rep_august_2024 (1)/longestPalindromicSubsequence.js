/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = [...new Array(n+1)].map(a => 
               [...new Array(n+1)].fill(0))
    for (let i = 0; i < n; i++) dp[i][i] = 1

    for (let i = 0; i < n; i++) {
        for (let j = i-1; j >= 0; j--) {
            let v1 = 0, v2 = dp[j+1][i], v3 = dp[j][i-1]
            if (s[i] === s[j]) {
                if (j+1 === i){
                    v1 = 2
                } else {
                    v1 = 2 + dp[j+1][i-1]
                }
            }
            dp[j][i] = Math.max(v1,v2,v3)
        }
    }
    return dp[0][n-1]
};
console.log(longestPalindromeSubseq("bbbab"))