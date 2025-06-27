/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// Merge Srings
// Time: O(n + m)
// Space: O(1)
var mergeAlternately = function(word1, word2) {
    let result = "", i = 0, j = 0, n = word1.length, m = word2.length

    while (i < n || j < m) {
        if (i < n) {
            result += word1[i]
            i++
        }
        if (j < m) {
            result += word2[j]
            j++
        }
    }
    return result;
};
console.log(mergeAlternately(word1 = "ab", word2 = "pqrs"))// = apbqrs


