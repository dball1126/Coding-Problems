class Node {
    constructor() {
        this.keys = new Map();
        this.isWord = false;
    }
}
var Trie = function() {
    this.trie = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) { // O(l)...longest word length
    let root = this.trie;
    for (let i = 0; i < word.length; i++) {
        let c = word[i]
        if (!root.keys.has(c)) root.keys.set(c, new Node(c))
        root = root.keys.get(c)
        if (i === word.length-1) root.isWord = true;
    }

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) { // O(l)...longest word length
    let root = this.trie;
    for (let i = 0; i < word.length; i++) {
        let c = word[i]
        if (!root.keys.has(c)) return false;
        root = root.keys.get(c)
        if (i === word.length -1 && root.isWord) return true;
    }
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) { // O(l)...longest word length
    let root = this.trie;
    for (let i = 0; i < prefix.length; i++) {
        let c = prefix[i]
        if (!root.keys.has(c)) return false;
        root = root.keys.get(c)
        if (i === prefix.length -1) return true;
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */