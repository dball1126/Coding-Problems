/**
 * @param {string} s
 * @return {number}
 */
// Palindromic Subsequence
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var longestPalindromeSubseq = function(s) {
    let n = s.length

    const dp = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(0))
    for (let i = 0; i < n; i++) dp[i][i] = 1
                                        // For loop direction
    for (let i = 0; i < n; i++) {       // -------------->
        for (let j = i-1; j >= 0; j--) {// <--------------
            let v = 0
            if (s[i] === s[j]) {
                if (j+1 === i) {
                    v = 2
                } else if (i-1 >= 0 && dp[j+1][i-1] !== undefined) {
                    v += (dp[j+1][i-1] + 2)
                    
                }
            }
            let v2 = dp[j+1][i], v3 = dp[j][i-1] || 0
            dp[j][i] = Math.max(v, v2, v3)
        }
    }
    return dp[0][n-1]
};
console.log(longestPalindromeSubseq("cbbd")) // = 2  "bb"



