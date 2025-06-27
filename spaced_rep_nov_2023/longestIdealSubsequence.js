/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var longestIdealString = function(s, k) {
    let n = s.length, max = 1;
    const dp = [...new Array(n+1)].fill(1)
    if (!s.length) return 0;

    for (let i = n-2; i >= 0; i--) {
        for (let j = i+1; j < n; j++) {
            
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) <= k) {
                dp[i] = Math.max(1 + dp[j], dp[i])
                max = Math.max(max, dp[i])
            }

        }
    }
    return max;
};

console.log(longestIdealString(s = "eduktdb"

, k = 15))