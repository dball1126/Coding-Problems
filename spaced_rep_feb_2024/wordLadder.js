/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// Backtracking
// Time: O((n^2 * m) + 2^n) ...where n is the wordList length...m is word length
// Space: O(n^2)
var ladderLength = function(beginWord, endWord, wordList) {
    let map = new Map(), result = Infinity, hasEndWord = false
    wordList.push(beginWord);
    let n = wordList.length

    for (let i = 0; i < n; i++) {
        if (wordList[i] === endWord) hasEndWord = true

        for (let j = i+1; j < n; j++) {
            if (!map.has(wordList[i])) map.set(wordList[i], new Set())
            if (!map.has(wordList[j])) map.set(wordList[j], new Set())
            // see if both words differ by 1
            let match = 0
            for(let k = 0; k < wordList[j].length; k++) {
                if (wordList[j][k] !== wordList[i][k]) match++
            }

            if (match === 1) {
                map.get(wordList[i]).add(wordList[j])
                map.get(wordList[j]).add(wordList[i])
            }
        }
    }
    if (!hasEndWord) return 0
    const backtrack = (w, set) => {
        if (w === endWord) {
            return result = Math.min(result, set.size)
        }
        console.log(set.size)
        if (map.has(w)) {
            for (let wrd of map.get(w)) {
                if (!set.has(wrd)) {
                    set.add(wrd)
                    backtrack(wrd, set)
                    set.delete(wrd)
                }
            }
        }
    }
    let set = new Set([beginWord])
    backtrack(beginWord, set)
    return result === Infinity ? 0 : result
};

console.log(ladderLength(beginWord = "qa", endWord = "sq", wordList = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))