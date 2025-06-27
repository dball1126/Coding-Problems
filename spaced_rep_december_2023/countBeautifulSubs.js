/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Time: O(n^2)
// Space: O(1)...5 variables and vowels size is 5
var beautifulSubstrings = function(s, k) {
    let total = 0, v = 0, c = 0, vowels = new Set(['a','e','i','o','u']), n = s.length
    
    for (let i = n-1; i >= 0; i--) {
        vowels.has(s[i]) ? v++ : c++
        let copyV = v, copyC = c;

        for (let j = n-1; j >= i+1; j--) {
            if (copyV === copyC && (copyV * copyC) % k === 0) total++
            vowels.has(s[j]) ? copyV-- : copyC--
        }
    }
    return total;
};
console.log(beautifulSubstrings(s = "abba", k = 1))//= 3

