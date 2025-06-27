/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// HashMap
// Time: O(n + m)...n for the first input length and for the second
// Space: O(m)
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    
    for (let i = 0; i < magazine.length; i++) {
        let v = magazine[i]
        if (!map.has(v)) map.set(v, 0)
            map.set(v, map.get(v) + 1)
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let v = ransomNote[i]
        if (!map.has(v)) return false;
        map.set(v, map.get(v) - 1)
        if (map.get(v) === 0) map.delete(v);
    }
    return true;
};
console.log(canConstruct( ransomNote = "aa", magazine = "aab"))

