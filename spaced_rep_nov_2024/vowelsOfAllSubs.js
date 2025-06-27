/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    let total = 0, curr = 0, vowels = new Set(["a",'e','i','o','u'])

    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word[i])) {
            curr += 1 + i
        }
        total += curr;
    }
    return total
};