/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// String Partition DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n * m * k)....n for s length, m for # of words, k for longest word in wordDict (less than or equal to n)
// Space: O(n)
var wordBreak = function(s, wordDict) {
    let n = s.length
    const dp = [...new Array(n+1)].fill(false)
    dp[n] = true
    for (let i = n-1; i >= 0; i--) { // O(n)
        for (let w of wordDict) { // O(m)
            if ((i + w.length <= n)) {
                let word = s.substring(i, i+w.length) // O(k)
                if (w === word) {
                    dp[i] = dp[i + w.length]
                    if (dp[i]) break;
                }
            }
        }
    }
    return dp[0]
};
console.log(wordBreak( s = "cars", wordDict = ["car","ca","rs"])) // = true

