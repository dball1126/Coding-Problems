/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
// Bi-directional Breadth-First-Search
// Time & Space: O(n * m)...n for words and m for word length
var minMutation = function(startGene, endGene, bank) {
    bank.unshift(startGene)
    const mutations = new Map(), n = bank.length
    let wordFound = false, levelFound = true, min = Infinity;
    for (let i = 0; i < n; i++) {
        let before = ""
        for (let j = 0; j < bank[i].length; j++) {
            let word = before + "*" + bank[i].substring(j+1)
            if (!mutations.has(word)) mutations.set(word, new Set())
            mutations.get(word).add(bank[i])
        before+= bank[i][j]
        }
        if (bank[i] === endGene) wordFound = true;
    }
    if (!wordFound) return -1
    let startQueue = [[startGene, 0]], endQueue = [[endGene, 0]], startVisited = new Map(), endVisited = new Map()
    while (startQueue.length || endQueue.length) {
        let startWord, startCount, endWord, endCount;
        if (startQueue.length) {
            [startWord, startCount] = startQueue.shift();
            startVisited.set(startWord, startCount);

        }
        if (endQueue.length) {
            [endWord, endCount] = endQueue.shift();
            endVisited.set(endWord, endCount);
            if (startVisited.has(endWord) && wordFound) {
                endCount + startVisited.get(endWord)
            }
        }
        const handleQueuedItem = (mainWord, queue, visited, count) => {
            let before = ""
            for (let i = 0; i < mainWord.length; i++) {
                let word = before + "*" + mainWord.substring(i+1)
                if (mutations.has(word)) {
                    let arr = Array.from(mutations.get(word))
                    arr.forEach(w => {
                        if (!visited.has(w)) {
                            visited.set(w, count+1)
                            queue.push([w, count+1])
                        }
                    })
                }
                before+= mainWord[i]
            }
        }
        if (startWord !== undefined) handleQueuedItem(startWord, startQueue, startVisited, startCount)
        if (endWord !== undefined) handleQueuedItem(endWord, endQueue, endVisited, endCount)
    }
    return -1
};
console.log(minMutation(startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]))
