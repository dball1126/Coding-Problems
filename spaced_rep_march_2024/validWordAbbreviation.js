/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// Two-pointer
// Time: O(n)...abbr cannot be bigger than n which is word leongth
// Space: O(1)
var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0, n = word.length, v1 = 0, v2 = 0
    if (abbr.length > word.length) return false;
    if (!abbr.length) return true

    while (i < n) {
        if (j >= abbr.length) return false

        if (abbr[j] >= "0" && abbr[j] <= "9") {
            if (abbr[j] === "0") return false;

            let string = ""
            while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
                string += abbr[j];
                j++;
            }
            v2 += parseInt(string)
            let end = i + parseInt(string)
            while (i < end && i < n) {
                i++; v1++;
            }

        } else {
            if (word[i] !== abbr[j]) return false;
            v1++; v2++; i++; j++;
        }
    }
    return v1 === v2 && j >= abbr.length
};
console.log(validWordAbbreviation(word = "are", abbr = "a1e")) // = true
