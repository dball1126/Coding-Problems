class TNode {
    constructor(val) {
        this.val = val;
        this.map = new Map()
        this.isWord = false;
    }
}
var longestValidSubstring = function(w, list) {
    let subs = new Set(), trie = new TNode(), longest = 0

    const insertWord = (w) => {
        let curr = trie;
        for (let i = 0; i < w.length; i++) {
            if (!curr.map.has(w[i])) {
                let nde = new TNode(w[i])
                curr.map.set(w[i], nde)
            }
            curr = curr.map.get(w[i])
            if (i === w.length-1) {
                curr.isWord = true
            }
        }
    }
    const getLongestSub = (idx, str) => {
        let curr = trie;
        for (let i = idx; i < str.length; i++) {
            if (!curr || !curr.map.has(str[i])) break;
            curr = curr.map.get(str[i])
            if (curr.isWord) return false
        }
        return true
    }
    for (let wrd of list) insertWord(wrd);

    for (let i = 0; i < w.length; i++) { // generate substrings
        let str = ""
        for (let j = i; j < w.length; j++) {
            str += w[j]
            if (!subs.has(str)) {
                let valid = true
                for (let i = 0; i < str.length; i++) {
                    if (trie.map.has(str[i])) {
                        valid = getLongestSub(i, str)
                        if (!valid) break
                    }
                }
                if (valid) longest = Math.max(longest, str.length)
            }
            subs.add(str)
        }
    }
    return longest
};
console.log(longestValidSubstring(word = "leetcode", forbidden = ["de","le","e"]))