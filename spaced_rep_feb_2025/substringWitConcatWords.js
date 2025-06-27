/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// Sliding Window
// Space: O(m)
// Time: O((n * k) + m)...n for s.length, k for the length of every word
// m for the number of words 
var findSubstring = function(s, words) {
    const wrdMap = new Map(), wrdLength = words[0].length, allIdxs = [];;
    let allWrdLength = 0;
    for (let w of words) {
        allWrdLength += w.length
        if (!wrdMap.has(w)) wrdMap.set(w, 0);
        wrdMap.set(w, wrdMap.get(w) + 1);
    }
    const recurse = (startIdx, i, map) => {
        while (i < s.length) {
            if (!map.size)return allIdxs.push(startIdx);
            let wrd = s.substring(i, i+ wrdLength);
            if (map.has(wrd)) {
            map.set(wrd, map.get(wrd) - 1)
            if (map.get(wrd) === 0) map.delete(wrd);
                i+= wrdLength;
            } else {
                break;
            }
        }
        if (!map.size) allIdxs.push(startIdx);
    }
    for (let i = 0; i < s.length; i++) {
        if (i+allWrdLength >= s.length+1) break;
        let wrd = s.substring(i, i+ wrdLength);
        if (wrdMap.has(wrd)) {
            let copy = new Map(wrdMap);
            copy.set(wrd, copy.get(wrd) - 1)
            if (copy.get(wrd) === 0) copy.delete(wrd);
            recurse(i, i+wrdLength, copy);
        }
    }
    return allIdxs
};
console.log(findSubstring(  s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]))
// [6,9,12]

