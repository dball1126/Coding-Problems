/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    let vowels = new Set(['a','e','i','o','u'])
    let count = 0, max = 0
    for (let i = 0; i < word.length; i++) {

        let v = word[i]
        if (vowels.has(v)) {
            count += 1
            count += i
        }
        max += count
    }
    return max
};
console.log(countVowels("abc"))