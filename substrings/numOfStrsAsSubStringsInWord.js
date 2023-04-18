// Substrings
// Time: O(n + m^2)
// Space: O(m^2)
var numOfStrings = function(patterns, word) {
    let allSubstrings = new Set();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let subStr = ""
        for (let j = i; j < word.length; j++) {
            subStr += word[j]
            allSubstrings.add(subStr)
        }
    }
    for (let pattern of patterns) {
        if (allSubstrings.has(pattern)) count++
    }
    return count;
};
console.log(numOfStrings(["a","abc","bc","d"], "abc")) // = 3
