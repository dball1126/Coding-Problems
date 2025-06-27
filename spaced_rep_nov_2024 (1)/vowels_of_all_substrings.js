/**
 * @param {string} word
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n)
// Space: O(1)
var countVowels = function(word) {
    const vowels = new Set(["a","e","i","o","u"])
    const n = word.length
    let dp = 0, total = 0
    for (let i = 0 ; i < n; i++) {
        if (vowels.has(word[i])) {
            dp += (i + 1)
        }
        total += dp
     }
     return total
};
console.log(countVowels("abc"))