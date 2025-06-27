/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Top-down Dynamic Programming
// Time: O(n * m * k)...n for s length and m for number of words in wordDict...k for word length
// Space: O(n)
var wordBreak = function(s, wordDict) {
    let n = s.length
    let memo = [...new Array(n)]
    const checkWord = (i, w) => {
        if (s[i] !== w[0]) return false;
        let c = 0
        while (s[i] === w[c] && c < w.length) {
            i++; c++
        }
        return c === w.length
    }
    const dp = (idx) => {
        if (idx === n) {
            return true
        }
        if (idx > n) return false
        if (memo[idx] !== undefined) {
            return memo[idx]
        }
        let pos = false
        for (let i = 0; i < wordDict.length; i++) {
            if (wordDict[i][0] === s[idx]) {
                let valid = checkWord(idx, wordDict[i])
                if (valid) {
                    pos  = pos || dp(idx + wordDict[i].length)
                }
            }
        }
        return memo[idx] = pos
    }
   return dp(0)
};
console.log(wordBreak(s = "leetcode", wordDict = ["leet","code"]))
