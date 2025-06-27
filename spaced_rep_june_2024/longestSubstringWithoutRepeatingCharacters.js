/**
 * @param {string} s
 * @return {number}
 */
// Sliding Window
// Time: O(n)
// Space: O(k)...the size of our window(longest string without repeating chars)
var lengthOfLongestSubstring = function(str) {
    const map = new Map()
    let s = 0, e = 0, n = str.length
    let max = 0;
    while (e < n) { // slide right pointer right

        if (!map.has(str[e])) map.set(str[e], 0)
        map.set(str[e], map.get(str[e]) + 1)

        if (map.get(str[e]) > 1) {
            while (map.get(str[e]) > 1) { // slide left pointer right
                map.set(str[s], map.get(str[s]) - 1)
                if (map.get(str[s]) === 0) map.delete(str[s])
                s++
            }
        } else {
            max = Math.max(max, ((e - s) + 1))
        }
        e++
    }
    return max;
};
console.log(lengthOfLongestSubstring("abcabcbb")) // = 3

