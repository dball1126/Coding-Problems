/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if (!s.length) return 0
    let l = s.length, max = 1
    const dp = [...new Array(l+1)].map(a => [...new Array(l+1)].fill(1))

    for(let i = 1; i <= l; i++) {
        
        for (let j = i-1; j >= 0; j--) {
            let v1 = dp[j][i-1], v2 = dp[j+1][i], v3 = 0, curr = 0
            if (s[j] === s[i]) {
                v3 = 2
                if (i-1 > j) v3 += dp[j+1][i-1]
            }
           curr = Math.max(curr, v1,v2,v3, dp[i][j])
            dp[i][j] = curr
            max = Math.max(max, curr)
        }

    }
    return max
};
console.log(longestPalindromeSubseq("bbbab"))