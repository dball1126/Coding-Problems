/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// Two pointers
// Time: O(n)...for word
// Space: O(1)
var validWordAbbreviation = function(word, abbr) {
    
    let i = 0, j = 0

    while (i < word.length && j < abbr.length) {
        if (word[i] === "0" || abbr[j] === "0") {
            return false;
        } else if (word[i] === abbr[j]) {
            i++; j++;
        } else if (word[i] >= "0" && word[i]  <= "9") {
            return false;
        } else {
            // collect
            let num = ""
            while (abbr[j] >= "0" && abbr[j] <= "9") {
                num += abbr[j]
                j++
            }
            i += parseInt(num)
        }
    }
    return i === word.length && j === abbr.length
};
console.log(validWordAbbreviation( word = "appe", abbr = "a2e"))// = true

