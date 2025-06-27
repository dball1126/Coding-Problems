class Node {
    constructor(val, isWord = false) {
        this.val = val; this.isWord = isWord; this.keys = new Map();}
}
// Trie
// Time and Space: O(n * m)...n for words...m for word length
var longestWord = function(words) {
    let result = "";
    let trie = new Node("")
    for (let word of words) {
        let curr = trie;
        for (let i = 0; i < word.length; i++) {
            let v = word[i]
            if (!curr.keys.has(v)) curr.keys.set(v, new Node(v))
            curr = curr.keys.get(v)
            if (i === word.length-1) curr.isWord = true;
        }
    }
    for (let word of words) {
        let curr = trie;
        for (let i = 0; i < word.length; i++) {
            let v = word[i];
            curr = curr.keys.get(v)
            if (!curr.isWord) break;
            if (i === word.length-1) {
                if (word.length >= result.length && word.localeCompare(result)) {
                    result = word;
                }}}
    }
    return result;
};
console.log(
longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))//= apple