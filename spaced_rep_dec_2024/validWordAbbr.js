/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// Two-Pointer Technique
// Time: O(n)
// Space: O(1)
var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0;
    while (j < abbr.length) {
        if (i >= word.length) return false;
        if (isNaN(abbr[j])) {
            if (word[i] !== abbr[j]) return false;
            i++; j++;
        } else {
            let v = "";
            if (abbr[j] === "0") return false;
            while (j < abbr.length && !isNaN(abbr[j])) {
                v += abbr[j];
                j++;
            }
            v = parseInt(v)
            i += v;
        }
    }
    return i === word.length && j === abbr.length;
};
console.log(validWordAbbreviation(word = "apple", abbr = "a2e"))