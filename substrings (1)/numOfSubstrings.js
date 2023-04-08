
// O(n * k + m)...n for words...k for word length...m for word(2nd param) length
// O(k)...word length
var numOfStrings = function(patterns, word) {
    let wordSet = new Set();
    for (let i = 0; i < word.length; i++) {
        let sub = word[i]
        wordSet.add(sub)
        for (let j = i+1; j < word[i].length; j++) {
            sub += word[j]
            wordSet.add(sub)
        }
    }
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
        if (patterns[0].length > word) continue
        count+=1
        for (let j = 0; j < patterns[i].length; j++) {
            if (!wordSet.has(patterns[i][j])) {
                count -= 1
                break;
            }
        }
    }
    return count;
};

console.log(numOfStrings(patterns = ["a","abc","bc","d"], word = "abc"))