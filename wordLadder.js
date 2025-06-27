/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const words = new Map();
    const wordMap = new Map();

    const getWord = (word) => {
        let map = new Map();
        if (words.has(word)) return new Map(words.get(word))
        for (let c of word) {
            if (!map.has(c)) map.set(c, 0)
            map.set(c, map.get(c) + 1)
        }
        words.set(word, map)
        return map
    }

    for (let i = 0; i < wordList.length-1; i++) {
        const word1 = getWord(wordList[i])
        if (!wordMap.has(word))
        for (let j = +1; j < array.length; j++) {
            const word2 = getWord(wordList[i])
            
            

        }

    }

};