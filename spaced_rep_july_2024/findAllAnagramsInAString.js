/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Sliding Window
// Time: O(n)...for length of first param
// Space: O(m)...fort length of second param
var findAnagrams = function(s, p) {
    if (p.length > s.length) return []
    const idxs = [], n = s.length
    let l = 0, r = 0
    let map = new Map()

    for (let i = 0; i < p.length; i++) {
        let v = p[i]
        if (!map.has(v)) map.set(v, 0)
        map.set(v, map.get(v) + 1)
    }
    let count = map.size, mapCopy = new Map(map)

    while (r < n) {
        const v = s[r]
        if (!mapCopy.has(v)) {
            l = r+1
            mapCopy = new Map(map)
            count = map.size
        } else {
            mapCopy.set(v, mapCopy.get(v) - 1)
            if (mapCopy.get(v) === 0) count--
            
            while (mapCopy.get(v) < 0) {
                if (mapCopy.get(s[l]) === 0) count++
                mapCopy.set(s[l], mapCopy.get(s[l]) + 1)
                l++
            }

            if (count === 0) { // slide left pointer right
                idxs.push(l)
                while (count === 0) {
                    if (mapCopy.get(s[l]) === 0) count++
                    mapCopy.set(s[l], mapCopy.get(s[l]) + 1)
                    l++
                }
            }
        }
        r++
    }
    return idxs
};
console.log(findAnagrams( s = "abab", p = "ab")) // = [0,1,2]