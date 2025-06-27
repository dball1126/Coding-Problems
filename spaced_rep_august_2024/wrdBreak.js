/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m * k)....n for s.length...m for number of words...k for the longest word
// Space: O(n)
var wordBreak = function(s, wordDict) {
    const dp = [...new Array(s.length+1)].fill(false)
    dp[s.length] = true

    for (let i = s.length-1; i >= 0; i--) {
        let valid = false;
        for (let w of wordDict) {
            if (i+w.length <= s.length) {
                let word = s.substring(i, i+w.length)
                if (word === w) {
                    valid = dp[i+w.length] || valid
                    if (valid) break
                }
            }
        }
        dp[i] = valid
    }
    return dp[0]
};
console.log(wordBreak(s = "leetcode", wordDict = ["leet","code"]))