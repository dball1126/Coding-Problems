class TNode {
    constructor() {
        this.isWord = false; this.keys = new Map()}
}

// Backtracking with some Dyanmic Programming and a T
var wordBreak = function(s, wordDict) {
    const trie = new TNode(), n = s.length

    const insert = (w) => {
        let n = w.length, root = trie
        for (let i = 0; i < n; i++) {
            let v = w[i]
            if (!root.keys.has(v)) {
                let nde = new TNode()
                root.keys.set(v, nde)
            }
            root = root.keys.get(v)
            if (i === n-1) root.isWord = true
        }
    }

    for (let w of wordDict) insert(w)
    let set = new Set()

    const search = (idx) => {
        if (idx >= n) return true;
        if (set.has(idx)) return
        set.add(idx)
        let root = trie;

        for (let i = idx; i < s.length; i++) {
            let v = s[i]
            if (!root.keys.has(v)) return false;
            root = root.keys.get(v)
            if (root.isWord) {
                if (i === n-1) {
                    return true;
                } else if (search(i+1)) {
                    return true;
                }
            }
        }
        return false
    }

    return search(0)
};
console.log(wordBreak( s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", 
wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))