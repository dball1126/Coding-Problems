/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let l = 0, r = 0
    let max = 0;
    let map = new Map();
    while (r < s.length) {
        if (!map.has(s[r])) map.set(s[r], 0)
        map.set(s[r], map.get(s[r]) + 1)

        if (map.get(s[r]) > 2) {
            // slide right pointer right
            while (map.get(s[r]) > 2) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
        } else {
            max = Math.max(max, r - l + 1)
        }
        r++
    }
    return max;
};

console.log(maximumLengthSubstring("bcbbbcba"))