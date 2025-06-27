/**
 * @param {string} sentence
 * @return {string}
 */

// String Manipulation
// Time & Space: O(n * m)...n for number of words and m for the longest word
var toGoatLatin = function(sentence) {
    const vowels = new Set(["a","e", "i", "o", "u"])
    sentence = sentence.split(" ")
    return sentence.map((s, idx) => {
        let newStr = ""
        if (vowels.has(s[0].toLowerCase())) {
            newStr = s + "ma"
        } else {
            newStr = s.slice(1) + s[0] + "ma"
        }
        if (newStr.endsWith("a")) {
            let v = idx + 1
            while (v !== 0) {
                v--; newStr += "a"
            }
        }
        return newStr
    }).join(" ")
};
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))

