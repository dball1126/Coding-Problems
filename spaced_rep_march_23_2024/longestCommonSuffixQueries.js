class Node {
    constructor() {
        this.isWord = false;
        this.wordIndex = []
        this.keys = new Map();
    }
}

/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    const trie = new Node();
    const wordLengths = new Map()
    const result = []
    for (let i = 0; i < wordsContainer.length; i++) {
        let w = wordsContainer[i];
        let len = w.length;
        let root = trie;
        wordLengths.set(i, len)
        for (let i = w.length-1; i >= 0; i--) {
            let c = w[i]
            if (!root.keys.has(c)) root.keys.set(c, new Node())
            const nde = root.keys.get(c)
            nde.wordIndex.push(i)
            root = nde;
        }
    }

    for (let query of wordsQuery) {

        let root = trie, idx
        for (let i = query.length-1; i >= 0; i--) {
            let q = query[i]
            let str = ""
            let idxs = [], prevIdxs = []
            if (root.keys.has(q)) {
                str += q
                root = root.keys.get(q)
                prevIdxs = [...idxs]
                idxs = root.wordIndex
            } else if (!root.keys.has(q)) {

                if (prevIdxs.length) {
                    let minIdx, maxLens;
                    idxs.forEEach((j) => {
                        let wL = wordLengths.get(j)
                        if (minIdx === undefined) {
                            minIdx = j;
                            maxLens = wL
                        } else if (wL === maxLens && j < minIdx) {
                            minIdx = j
                            maxLens = wL;
                        }
                    })
                }
                break
            }
            if (i === 0) {
                if (idxs.length) {
                    let minIdx, maxLens;
                    idxs.forEach((j) => {
                        let wL = wordLengths.get(j)
                        if (minIdx === undefined) {
                            minIdx = j;
                            maxLens = wL
                        } else if (wL === maxLens && j < minIdx) {
                            minIdx = j
                            maxLens = wL;
                        }
                    })
                }
            }
            
        }
        idx === undefined ? result.push(0) : result.push(idx)
    }
    return result
};
console.log(stringIndices(wordsContainer = ["abcd","bcd","xbcd"], wordsQuery = ["cd","bcd","xyz"]))