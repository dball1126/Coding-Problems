/**
 * Convert banned words to a set
 * split paragraph using regex split
 * use map to store word and occurance of the word
 * return the word that occurs the most that is not banned
 * Time & Space O(n + m)
 */
var mostCommonWord = function(paragraph, banned) {
    const separators = "!?',;."
    const set = new Set([...banned]);
    const map = new Map();
    const pArr = paragraph.split(/[/!?',;. ]+/);
    
    pArr.forEach(w => {
        w = w.toLowerCase();
        if (w !== '' && w !== ' ' && !w.includes(separators) && !set.has(w)) {
            if (!map.has(w)) map.set(w, 0);
            map.set(w, map.get(w)+1)
        }
    })

    let max = -Infinity;
    let maxWord = ''
    for(let [k, v] of map) {
        if (v > max) {
            max = v;
            maxWord = k
        }
    }

    return maxWord    
};

console.log(mostCommonWord(paragraph = "this is but, me to do this! and you know you're hit, but fuck you and and", banned = ["hit", "and"]))