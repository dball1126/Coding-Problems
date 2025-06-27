/**
 * @param {string} word
 * @return {number}
 */
// Dynamic Programming
// Time and Space: O(n)
var countVowels = function(word) {
    let n = word.length, max = 0, vowels = new Set(['a','e','i','o','u'])
    const dp = [...new Array(n)].fill(0)

    for (let i = 0; i < n; i++) {
        let prev = dp[i-1] || 0, w = word[i]
        let v = vowels.has(w) ? 1 + i : 0
        dp[i] = prev + v
        max += dp[i]
    }
    return max
};
console.log(countVowels("aba")) // = 6 "a"'s
/**                       "a"
 *                       "ba"
 *                      "a"
 *                      "ab"
 *                      "aba"
 */
