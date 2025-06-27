class TNode {
    constructor() {
        this.keys = new Map();
        this.isWord = false;
    }
}
var Trie = function() {
    this.root = new TNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root, len = word.length;
    for (let i = 0; i < word.length; i++) {
        const v = word[i];
        if (node.keys.has(v)) {
            node = node.keys.get(v)
        } else {
            let newNode = new TNode()
            node.keys.set(v, newNode)
            node = node.keys.get(v)
        }
        if (i === len-1) node.isWord = true;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root, len = word.length
    for (let i = 0; i < len; i++) {
        if (!node.keys.has(word[i])) return false;
        node = node.keys.get(word[i])
        if (i === len-1&& node.isWord) return true;
    }
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root, len = prefix.length
    for (let i = 0; i < len; i++) {
        if (!node.keys.has(prefix[i])) return false;
        node = node.keys.get(prefix[i])
        if (i === len-1) return true;
    }
    return false
};
