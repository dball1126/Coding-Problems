class TNode {
    constructor() {
        this.isWord = false;
        this.keys = new Map();
    }
}
var Trie = function() {
    this.root = new TNode();
};
Trie.prototype.insert = function(word) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (!root.keys.has(c)) {
            root.keys.set(c, new TNode())
        }
        root = root.keys.get(c)
        if (i === word.length-1) root.isWord = true;
    }
};
Trie.prototype.search = function(word, isPrefix = false) {
    let stack = [[this.root, 0]]
    while (stack.length) {
        let [root, idx] = stack.pop();
        for (let [key, nde] of Array.from(root.keys)) {
            if (word[idx] === key) {
                if (nde.isWord && !isPrefix && idx === word.length-1) return true;
                if (idx+1 < word.length) {
                    stack.push([nde, idx + 1])
                } else if (isPrefix) {
                    return true;
                }
            }
        }
    }
    return false;
};
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true)
};
