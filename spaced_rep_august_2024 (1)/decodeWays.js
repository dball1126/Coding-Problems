/**
 * @param {string} s
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n)
var numDecodings = function(s) {
    const n = s.length
    const dp = [...new Array(n+1)].fill(0)
    dp[s.length] = 1

    for (let i = n-1; i >= 0; i--) {
        let v = s[i]
        if (v === '0') continue
        let v1 = dp[i+1], v2 = 0
        if (i+1 < n) {
            if (v + s[i+1] <= '26') {
                v2 = dp[i+2]
            }
        }
        dp[i] = v1 + v2
    }
    return dp[0]
};
console.log(numDecodings("226")) // = 3
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6)


