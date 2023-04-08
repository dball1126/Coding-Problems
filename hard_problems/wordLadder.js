/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// Time: O((n * m * m) + (n * m * m) = (n * m^2))
// n = wordList.length, m = word.length, c = combos...small input
// Space: O(n * m^2)
var ladderLength = function(beginWord, endWord, wordList) {
    let count = 0, queue = [[beginWord]], combos = new Map(), visited = new Set();
    for (let word of wordList) {
        if (word === beginWord) continue
        for(let i = 0; i < word.length; i++) {
            let prefix = word.substring(0, i), suffix = word.substring(i+1)
            let newWord = prefix + "*" + suffix
            if (!combos.has(newWord)) combos.set(newWord, [])
            combos.get(newWord).push(word)}
    }
    while (queue.length) {
        count++
        let level = queue.shift(), newLevel = []
        for(let word of level) {
            visited.add(word)
            if (word === endWord) return count
            for(let i = 0; i < word.length; i++) {
                let prefix = word.substring(0, i), suffix = word.substring(i+1)
                let newWord = prefix + "*" + suffix
                if (visited.has(newWord)) continue;
                visited.add(newWord)
                if (combos.has(newWord)) {
                    combos.get(newWord).forEach(w => {
                        if (!visited.has(w)) {
                            newLevel.push(w)
                            visited.add(w)}})}}
        }
        if (newLevel.length) queue.push(newLevel)
    }
    return 0
};

console.log(ladderLength("leet", "code", ["lest","leet","lose","code","lode","robe","lost"]))