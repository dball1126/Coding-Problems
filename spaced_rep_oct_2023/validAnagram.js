/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// HashMap
// Time: O(n + m)
// Space: O(n)
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let c of s) {
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c) + 1)
    }

    for (let c of t) {
        if (!map.has(c)) return false;
        map.set(c, map.get(c) - 1)
        if (map.get(c) === 0) map.delete(c)
    }
    return map.size === 0
};
console.log(isAnagram(s = "anagram", t = "nagaram"))// = true
