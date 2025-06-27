/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length
    const dp = [...new Array(n+1)].fill(false)
    dp[n] = true
    for (let i = n-1; i >= 0; i--) {
        for (let w of wordDict) {
            if (i + w.length <= n && (w === s.substring(i, i+ w.length))) {
                dp[i] = dp[i] || dp[i+ w.length]
                if (dp[i]) break
            }
        }
    }
    return dp[0]
};
console.log(wordBreak(s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]))