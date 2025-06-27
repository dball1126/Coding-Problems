/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// Sliding Window
// Time : O(n)...for s
// Space: O(m)...for t
var minWindow = function(s, t) {
    if (t.length > s.length) return ""
    let map = new Map()
    let l = 0, r = 0, n = s.length
    let minIdxL, minIDxR;

    for (let c of t) {
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c) + 1)
    }
    let count = map.size

    while (r < n) { // slide right pointer right
        let v = s[r]
        if (map.has(v)) {
            map.set(v, map.get(v) - 1)
            if (map.get(v) === 0) count--
        }

        if (count === 0) {
            while (l <= r && count === 0) { // slide left pointer right

                if (minIdxL === undefined) {
                    minIdxL = l, minIDxR = r
                } else if ((r - l) < (minIDxR - minIdxL)) {
                    minIdxL = l, minIDxR = r
                }

                if (map.has(s[l])) {
                    map.set(s[l], map.get(s[l]) + 1)
                    if (map.get(s[l]) > 0) count++
                }
                l++
            }
        }
        r++
    }
    let minString = ""
    if (minIdxL !== undefined) {
        for (let i = minIdxL; i <= minIDxR; i++) {
            minString += s[i]
        }
    }
    return minString
};
console.log(minWindow(s = "ADOBECODEBANC", t = "ABC")) // = "BANC"
