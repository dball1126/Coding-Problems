// Sliding Window
// Time: O(n + m)
// Space: O(m)
var minWindow = function(str1, str2) {
    if (str2.length > str1.length) return "";
    const wordMap = new Map();
    for (let i = 0; i < str2.length; i++) {
        if (!wordMap.has(str2[i])) wordMap.set(str2[i], 0)
        wordMap.set(str2[i], wordMap.get(str2[i]) + 1)
    }
    let count = wordMap.size, s = 0, e = 0, minStr = ""

    while (e < str1.length) { // slide right pointer right
        if (wordMap.has(str1[e])) {
            wordMap.set(str1[e], wordMap.get(str1[e]) - 1)
            if (wordMap.get(str1[e]) === 0) count--
        }

        if (count === 0) {
            while (!(s > e) && count === 0) { // slide left pointer right
                let word = str1.substring(s, e + 1)
                if (word.length < minStr.length || !minStr) minStr = word;

                if (wordMap.has(str1[s])) {
                    wordMap.set(str1[s], wordMap.get(str1[s]) + 1)
                    if (wordMap.get(str1[s]) > 0) count++
                }
                s++
            }
        }
        e++
    }
    return minStr;
};
console.log(minWindow(s = "ADOBECODEBANC", t = "ABC")) // =  BANC
