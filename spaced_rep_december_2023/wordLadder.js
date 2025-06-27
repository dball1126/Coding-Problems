/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// This version doesn't care about the index position of the character...which is actually wrong haha
// Breadth-First-Search
// Time: O(n^2 * m^2)...n for words...m for words length
// Space: O(n * m)...word * word length
// var ladderLength = function(beginWord, endWord, wordList) {
//     let ladder = Infinity;
//     wordList.unshift(beginWord)
//     const words = new Map();
//     const wordMap = new Map();

//     const getWord = (word) => {
//         let map = new Map();
//         if (words.has(word)) return new Map(words.get(word))
//         for (let c of word) {
//             if (!map.has(c)) map.set(c, 0)
//             map.set(c, map.get(c) + 1)
//         }
//         words.set(word, map)
//         return new Map(map)
//     }

//     for (let i = 0; i < wordList.length-1; i++) {
//         const w = wordList[i]
//         if (!wordMap.has(w)) wordMap.set(w, new Set())
        
//         for (let j = i+1; j < wordList.length; j++) {
//             if (i+1 >= wordList.length) continue;
//             const word1 = getWord(w)
//             const w2 = wordList[j]
//             if (w2.length !== w.length) continue;
//             if (!wordMap.has(w2)) wordMap.set(w2, new Set())
//             let cCount = 0
//             for (let c of w2) {
//                 if (word1.has(c)) {
//                     word1.set(c, word1.get(c) - 1)
//                     if (!word1.get(c).size) word1.delete(c)
//                 } else {
//                 cCount++
//                 }
//             }   
//             if ((word1.size === 1 && Array.from(word1.values())[0] === 1 && cCount === 1)) {
//                 wordMap.get(w).add(w2)
//                 wordMap.get(w2).add(w)
//             }
//         }
//     }
//     const bfs = [[beginWord, 1]], visited = new Set();

//     while (bfs.length) {
//         let [wrd, count] = bfs.shift();
//         visited.add(wrd)
//         const wrdSet = wordMap.get(wrd)
//         if (!wrdSet) continue;
//         if (wrdSet.has(endWord)) {
//             ladder = Math.min(count+1, ladder)
//             continue;
//         }

//         for (let cWrd of Array.from(wordMap.get(wrd))) {
//             if (visited.has(cWrd)) continue;
//             visited.add(cWrd)
//             bfs.push([cWrd, count+1])
//             console.log(cWrd + " : " + (count+1))
//         }
//     }
//     return ladder === Infinity ? 0 : ladder;
// };

// Breadth-First-Search
// Time: O(n^2 * m)...n for words...m for words length
// Space: O(n^2)...word * word length
var ladderLength = function(beginWord, endWord, wordList) {
    let ladder = Infinity, wordMap = new Map(), bfs = [[beginWord, 1]], visited = new Set();;
    wordList.unshift(beginWord)

    for (let i = 0; i < wordList.length-1; i++) {
        const w = wordList[i]
        if (!wordMap.has(w)) wordMap.set(w, new Set())
        for (let j = i+1; j < wordList.length; j++) {
            if (j >= wordList.length) continue;
            const w2 = wordList[j]
            if (w2.length !== w.length) break;
            if (!wordMap.has(w2)) wordMap.set(w2, new Set())
            let cCount = 0
            for (let c = 0; c < w2.length; c++) {
                if (w[c] !== w2[c]) cCount++
            }
            if (cCount === 1) {
                wordMap.get(w).add(w2)
                wordMap.get(w2).add(w)
            }
        }
    }
    while (bfs.length) {
        let [wrd, count] = bfs.shift();
        visited.add(wrd)
        const wrdSet = wordMap.get(wrd)
        if (!wrdSet) continue;
        if (wrdSet.has(endWord)) {
            ladder = Math.min(count+1, ladder); continue;
        }
        for (let cWrd of Array.from(wordMap.get(wrd))) {
            if (visited.has(cWrd)) continue;
            visited.add(cWrd); bfs.push([cWrd, count+1])
        }
    }
    return ladder === Infinity ? 0 : ladder;
};

console.log(ladderLength(beginWord = "hit", endWord = "cog", wordList = ["hot","hog","cog"]))//= 4