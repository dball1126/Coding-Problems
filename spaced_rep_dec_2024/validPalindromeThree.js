/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)...for rows * cols
var isValidPalindrome = function(s, k) {
    const dp = [...new Array(s.length+1)].map(a => [...new Array(s.length+1)].fill(0))
    for (let i = 0; i < s.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (s[j] === s[i]) {
                if (j+1 === i) {
                    dp[j][i] = 0
                } else {
                    dp[j][i] = dp[j+1][i-1]
                }
            } else {
                if (j+1 === i) {
                    dp[j][i] = Math.min(dp[j+1][i], dp[j][i-1]) + 1
                } else {
                    dp[j][i] = Math.min(dp[j+1][i], dp[j][i-1]) +1
                    dp[j][i] = Math.min(dp[j][i], dp[j+1][i-1] + 2)
                }
            }
        }
    }
    return dp[0][s.length-1] <= k
};
console.log(isValidPalindrome(s = "abbababa", k = 1)) // = true

