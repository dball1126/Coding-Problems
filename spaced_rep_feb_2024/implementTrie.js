class Node {
    constructor(isWord = false) {
        this.isWord = isWord; this.keys = new Map();
    }
}

var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cRoot = this.root, n = word.length
    for (let i = 0; i < n; i++) {
        let v = word[i]
        if (!cRoot.keys.has(v)) cRoot.keys.set(v, new Node())
        cRoot = cRoot.keys.get(v);
        if (i === n-1) cRoot.isWord = true;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cRoot = this.root, n = word.length
    for (let i = 0; i < n; i++) {
        let v = word[i]
        if (!cRoot.keys.has(v)) return false;
        cRoot = cRoot.keys.get(v);
        if (i === n-1 && cRoot.isWord) return true;
    }
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cRoot = this.root, n = prefix.length
    for (let i = 0; i < n; i++) {
        let v = prefix[i]
        if (!cRoot.keys.has(v)) return false;
        cRoot = cRoot.keys.get(v);
        if (i === n-1) return true;
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