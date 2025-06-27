/**
 * @param {string} s
 * @return {number}
 */
// Sliding Window
// Time and Space: O(n)
var lengthOfLongestSubstring = function(str) {
    let result = 0, n = str.length, s = 0, e = 0, map = new Map()

    while (e < n) {
        if (!map.has(str[e])) map.set(str[e], 0)
        map.set(str[e], map.get(str[e]) + 1);

        if (map.get(str[e]) < 2) {
            result = Math.max(result,( e - s) + 1)
        } else {
            while (s < e && map.get(str[e]) >= 2) {
                map.set(str[s], map.get(str[s]) - 1);
                s++
            }
        }
        e++
    }
    return result;
};
console.log(lengthOfLongestSubstring("pwwkew"))// = 3

