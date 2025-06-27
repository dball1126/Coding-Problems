/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    let vowels = 0, total = 0
    let set = new Set(['a','e','i','o','u'])
  
    for (let i = 0; i < word.length; i++) {
        let v = word[i]
        if (set.has(v)) {
            vowels += (i + 1)
        }
        total += vowels
    }
    return total
};
console.log(countVowels("aaa"))