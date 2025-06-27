/**
 * @param {string[]} words
 * @return {string}
 */
class Node {
    constructor() {
        this.keys = new Map()
    }
}
var alienOrder = function(words) {
    
    let adjList = new Map();
    let order = new Map();
    let trie = new Node();
    let longestWoridx = 0
    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        longestWoridx = Math.max(longestWoridx, w.length)
        let root = trie
        for (let c of w) {
            if (!adjList.has(c)) adjList.set(c, new Node())
            if (!order.has(c)) adjList.set(c, i)
            if (!root.keys.has(c)) root.keys.set(c, new Node())
            root = root.keys.get(c)
        }
    }
    let alpha = ""
    let idx = 0
    for (let idx = 0; idx < longestWoridx; idx++) {

        for (let i = 0; i < words.length; i++) {
            let prev = alpha[alpha.length-1]
            if (words[i]  && words[i][idx]) {
                let c = words[i][idx]
                if (prev && prev !== c && prev.includes(c)) {
                    return ""
                }
                console.log(words[i])
            }
            alpha += c
        }
    }

    // console.log(trie)
    return alpha
};

console.log(alienOrder(words = ["wrt","wrf","er","ett","rftt"]))