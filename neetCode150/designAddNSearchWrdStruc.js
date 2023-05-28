
class TrieNode {
    keys = new Map()
    isWord = false;
    constructor(val) {this.val = val;}
}
var WordDictionary = function() {
    this.root = new TrieNode();
};
// Time & Space: O(n)...n for word length
WordDictionary.prototype.addWord = function(word, i = 0, curr = this.root) {
    if (!word[i]) return;

    if (!curr.keys.has(word[i])) {
        let node = new TrieNode(word[i])
        curr.keys.set(word[i], node)
    }

    curr = curr.keys.get(word[i])
    if (i === word.length-1) curr.isWord = true;
    this.addWord(word,i+1, curr)
};
// Time: O(m)...for a word without the undefined letter '.'
// Time: O(n * 26^m)...n for keys...m for a word with some undefined letters of '.'
// Space: O(m)...for word length of the recursion stack
WordDictionary.prototype.search = function(word, i = 0, curr = this.root) {
    if (!word[i]) return false;
    if (!curr.keys.has(word[i]) && word[i] !== '.') return false;
    
    if (curr.keys.has(word[i])) {
        curr = curr.keys.get(word[i])
        if (i === word.length-1 && curr.isWord) return true;
        return this.search(word, i+1, curr)
    } 
    else if (word[i] === '.') {
        for (let [k, v] of curr.keys) {
            let temp =  curr.keys.get(k);
            if (temp.isWord && i === word.length-1) return true;
            let maybeResult = this.search(word, i+1, temp)
            if (maybeResult) return true;
        }
    }
    return false;
};
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("mad");


console.log(wordDictionary.search(".a."))
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True