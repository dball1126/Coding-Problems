/**
 * @param {string} s
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var longestPalindromeSubseq = function(str) {
    if (!str) return 0;
    let n = str.length, max = 1;
    const dp = [...new Array(n+1)].map(a =>
               [...new Array(n+1)].fill(1)) // base case

    for (let i = 0; i < n; i++) {
        for (let j = i-1; j >= 0; j--) { // j does not exceed i
            let v1 = 1
            if (str[i] === str[j]) {
                if (j+1 === i) {
                    v1 = 2
                } else {
                    v1 = 2 + dp[j+1][i-1]
                }
            }
            let v2 = dp[j+1][i] || 0, v3 = dp[j][i-1] || 0

            if (v1 >= v2 && v1 >= v3) {
                dp[j][i] = v1
            } else if (v2 >= v1 && v2 >= v3) {
                dp[j][i] = v2
            } else {
                dp[j][i] = v3
            }
            if (dp[j][i] > max) {
                max = dp[j][i]
            }
        }
    }
    return max
};
console.log(longestPalindromeSubseq("bdibbab")) // = "bbbb" = 4


