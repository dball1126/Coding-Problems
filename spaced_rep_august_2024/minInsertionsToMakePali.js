/**
 * @param {string} s
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var minInsertions = function(s) {
    let n = s.length
    const dp = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(0))
    for (let i = 0; i < n; i++) dp[i][i] = 0

    for (let i = 0; i < n; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (s[i] === s[j]) {
                dp[j][i] += dp[j+1][i-1]
            } else {
                dp[j][i] = 1+ Math.min(dp[j+1][i], dp[j][i-1])
            }
        }
    }
    return dp[0][n-1]
};
console.log(minInsertions("mbadm")) // = 2  (remove 2 chars)

