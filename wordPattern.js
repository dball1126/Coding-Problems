

// Time: O(n)
// Space: O(n + m)
var wordPattern = function(pattern, s) {
    let wordSet = new Map();
    let letters = new Map();
    s = s.split(" ")
    if (s.length !== pattern.length) return false;

    for (let j = 0; j < s.length; j++) {
        const word = s[j];
        const ltr = pattern[j]
        if (wordSet.has(word) && wordSet.get(word) !== ltr) return false
        if (letters.has(ltr)) {
            if (letters.get(ltr) !== word) return false            
        } else {
            wordSet.set(word, ltr)
            letters.set(ltr, word)
        }
    }
    return true;
};