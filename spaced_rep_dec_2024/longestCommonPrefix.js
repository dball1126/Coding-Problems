class Trie {
    constructor() {
        this.root = new TNode()
        this.longestCommon = ""
    }
    insertWord(w) {
        let curr = this.root, longestCommonActive = true
        let longestCommon = ""
        for (let i = 0; i < w.length; i++) {
            if (curr.map.has(w[i])) {
                if (longestCommonActive) {  
                    longestCommon += w[i]
                }else {longestCommonActive = false}
                    curr = curr.map.get(w[i])

            } else {
                longestCommonActive = false
                let newNode = new TNode()
                curr.map.set(w[i], newNode)
                curr = newNode
            }
            if ( i === w.length-1 ) curr.isWord = true
        }
        if (this.longestCommon.length < longestCommon.length) this.longestCommon = longestCommon
    }
}
class TNode {
    constructor(isWord = false) {
        this.map = new Map();
        this.isWord = isWord;
    }

}
var longestCommonPrefix = function(strs) {
    const trie = new Trie()
    for (let wrd of strs) {
        trie.insertWord(wrd)
    }
    return trie.longestCommon.length <=strs.length
};
console.log(longestCommonPrefix(["flower","flow","flight"]))