/**
 * Sliding window:
 * Time O(n) for s string
 * Space: O(m) for t string
 */
var minWindow = function(s, t) {
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) map.set(t[i], 0)
        map.set(t[i], map.get(t[i]) + 1)
    }

    let l = 0, r = 0, end = s.length, count = map.size, result = ""

    while (r < end) { // slide right pointer right
        if (map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1)
            if (map.get(s[r]) === 0) count--;
        }
        
        if (count === 0) {
            while (count <= 0) { // slide left pointer right
                let str = s.substring(l, r + 1)
                if (!result || str.length < result.length) {
                    result = str
                }
                if (map.has(s[l])) {
                    map.set(s[l], map.get(s[l]) + 1)
                    if (map.get(s[l]) === 1) count++
                }
                l += 1
            }
        }
        r += 1
    }
    return result;
};

console.log(minWindow(s = "a", t = "aa"))