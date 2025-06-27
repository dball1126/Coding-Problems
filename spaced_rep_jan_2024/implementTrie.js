class Node {
    constructor(val, isWord) {
        this.val = val;
        this.isWord = isWord
        this.keys = new Map()
    }
}
var Trie = function() {
    this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let copy = this.root;
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (!copy.keys.has(c)) {
            copy.keys.set(c, new Node(c, false))
        }
        copy = copy.keys.get(c)
        if (i === word.length-1) copy.isWord = true;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let copy = this.root;
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (!copy.keys.has(c)) return false;
        copy = copy.keys.get(c)
        if (i === word.length-1 && copy.isWord) return true;
    }
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let copy = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const c = prefix[i];
        if (!copy.keys.has(c)) return false;
        copy = copy.keys.get(c)
        if (i === prefix.length-1) return true;
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