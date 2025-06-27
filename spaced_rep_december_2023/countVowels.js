/**
 * @param {string} word
 * @return {number}
 */
// Dynamic Programming
// Time: O(n)
// Space: O(1)
var countVowels = function(word) {
    let n = word.length, dp = 0, total = 0
    const vowels = new Set(["a","e",'i','o','u'])
    for (let i = 0; i < n; i++) {
        if (vowels.has(word[i])) {
            dp += i + 1
        }
        total += dp
    }
    return total
};

console.log(countVowels("aaa"))