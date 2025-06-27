// THIS IS INCORRECT...time limit exceeded...they wanted DP...however the trie is working

class TNode {
    constructor(isWord = false) {
        this.keys = new Map();
        this.isWord = isWord;
    }
    insert(w, trie) {
        let copy = trie
        for(let i = 0; i < w.length; i++) {
            if (!copy.keys.has(w[i])) {
                let nde = new TNode()
                copy.keys.set(w[i], nde)
            }
            copy = copy.keys.get(w[i])
            if (i === w.length-1) copy.isWord = true;
        }
    }
}
// Trie
// Time: O(m * l) to build Trie, O(n * l) to search trie
// Space: O(m * l)...to search trie because of recursive call stacks
var wordBreak = function(s, wordDict) {
    const trie = new TNode(), n = s.length
    wordDict.forEach(word => {
        trie.insert(word, trie)
    })
    const search = (j, copy) => {
        if (j >= n) return false
        if (!copy.keys.has(s[j])) return false;
        copy = copy.keys.get(s[j])
        if (j === n-1){
            return copy.isWord ? true : false
        }

        let next = search(j+1, copy)
        if (next) return true;
        if (copy.isWord) {
            let newCopy = trie
            return search(j+1, newCopy)
        }
        return false

    }
    let copy = trie
    return search(0, copy);
};
console.log(wordBreak(s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", 
wordDict = ["apple","pen"]))
