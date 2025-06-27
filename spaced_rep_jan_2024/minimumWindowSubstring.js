/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// Sliding Window
// Time: O(n + m)
// Space: O(m)
var minWindow = function(str, t) {
    if (t.length > str.length) return ""
    if (str === t) return str;
    let map = new Map(), count = 0, s = 0, e = 0, n = str.length, result = "", curr = ""

    for (let c of t) {
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c) + 1)
    }
    count = map.size;

    while (e < n) {
        curr += str[e];

        if (map.has(str[e])) {
            map.set(str[e], map.get(str[e]) - 1)
            if (map.get(str[e]) === 0) count--;
        }
        while (s <= e && count === 0) {
            if (!result.length || curr.length < result.length) {
                result = curr;
            }
            if (map.has(str[s])) {
                map.set(str[s], map.get(str[s]) + 1)
                if (map.get(str[s]) > 0) count++
            }
            s++
            curr = curr.slice(1)
        }
        e++
    }
    return result;
};
console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"))//= "BANC"

