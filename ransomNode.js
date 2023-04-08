// HashMap
// Time: O(n + m)
// Space: O(m)
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;
    let magMap = new Map();
    for (let m of magazine) {
        if (!magMap.has(m)) magMap.set(m, 0)
        magMap.set(m, magMap.get(m) + 1)
    }
    for (let n of ransomNote) {
        if (!magMap.has(n) || magMap.get(n) <= 0) return false;
        magMap.set(n, magMap.get(n) - 1)
    }
    return true;
};