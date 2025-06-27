class TNode {
    constructor(val = null, isWord = false) {
        this.val = val; this.isWord = isWord; this.keys = new Map();
    }
}
// Trie Data Structure
// Time & Space: O(w + l)...w for # of words, l for each word length
var longestWord = function(words) {
    let result = '', n = words.length, trie = new TNode();

    for(let wrd of words) { // build Trie
        let root = trie;
        for (let i = 0; i < wrd.length; i++) {
            let nde = new TNode(wrd[i], false);

            if (root.keys.has(wrd[i])) {
                nde = root.keys.get(wrd[i])
            } else {
                root.keys.set(nde.val, nde)
            }
            if ( i === wrd.length -1) nde.isWord = true;

            root = nde;
        }
    }

    for (let i = 0; i < n; i++) {
        let wrd = words[i], root = trie, isWord = true
        for (let j = 0; j < wrd.length; j++) {
            let nde = root.keys.get(wrd[j])
            if (!nde || !nde.isWord) {
                isWord = false; break;
            }
            root = nde
        }
        if (isWord) {
            if (!result || wrd.length > result.length || (wrd.length === result.length && wrd < result)) {
                result = wrd
            }
        }
    }
    return result;
};
console.log(longestWord(words = ["a","banana","app","appl","ap","apply","apple"]))//="apple"

