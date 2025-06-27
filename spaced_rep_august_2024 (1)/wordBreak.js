/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Bottom-Up Dyanmic Programming
// Time: O(n^2 * m)
// Space: O(n)
var wordBreak = function(s, wordDict) {
    let n = s.length
    const dp = [...new Array(n+1)].fill(false)
    dp[dp.length-1] = true // base case

    for (let i = n-1; i >= 0; i--) {
        let isWord = false;
        for (let w of wordDict) {
            let len = w.length;
            if (len + i <= n) {
                let word = s.substring(i, len+i)
                if (word === w) {
                    isWord = dp[len+i]
                    if (isWord) break;
                }
            }
        }
        dp[i] = isWord
    }
    return dp[0]
};
console.log(wordBreak(s="leetcode", wordDict=["leet","code"]))//= true


