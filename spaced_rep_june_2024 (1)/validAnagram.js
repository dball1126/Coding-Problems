/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Hash Map
// Time: O(n + m)...n for s and m for t
// Space: O(n)
var isAnagram = function(s, t) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) return false
        map.set(t[i], map.get(t[i]) -1 )
        if (map.get(t[i]) === 0) map.delete(t[i])
    }
    return map.size === 0
};
console.log(isAnagram(s = "anagram", t = "nagaram")) // = true

