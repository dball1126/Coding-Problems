class Node {
    constructor() {
        this.isType1 = false;
        this.isType2 = false;
        this.len = 0
        this.keys = new Map()
    }

    insert(wrd, trie, type) {
        wrd += ""
        let nde = trie
        for (let i = 0; i < wrd.length; i++) {
            let c = wrd[i]
            if (!nde.keys.has(c)) {
                nde.keys.set(c, new Node())
            }
            nde = nde.keys.get(c)
            nde.len = Math.max(nde.len, i+1)
            if (type === 1) {
                nde.isType1 = true;
            } else {
                nde.isType2 = true;
            }
        }
    }
}
// Trie
// Time: O(n + m * l)...n for arr1 length, m for arr2 length, l for the longest word in either (for building trie)
//       O(l) for searching trie
// Space: O(n + m)
var longestCommonPrefix = function(arr1, arr2) {
    const trie = new Node()
    let terminate = true
    for (let w of arr1) trie.insert(w, trie, 1)
    for (let w of arr2) {
        let char = (w + "")[0]
        if (trie.keys.has(char)) {
            trie.insert(w, trie, 0)
            terminate = false
        }
    }

    let longest = 0
    if (terminate) return longest
    const searchNode = (root) => {
        if (!root) return
        for (let [k, nde] of root.keys) {
            if (nde.isType1 && nde.isType2) {
                longest = Math.max(longest, nde.len)
                searchNode(nde)
            }
        }
    }
    searchNode(trie)
    return longest
};
console.log(longestCommonPrefix(arr1 = [1,10,100], arr2 = [1000])) // = 3

