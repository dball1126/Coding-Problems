/**
 * @param {string} s
 * @return {number}
 */
// Sliding Window
// Time and Space: O(n)
var lengthOfLongestSubstring = function(str) {
    const set = new Set()
    let s = 0, e = 0, n = str.length, longest = 0
    while (e < n) { // slide right pointer right
        let c = str[e]
        if (set.has(c)) {
            while (set.has(c)) { // slide left pointer right
                set.delete(str[s])
                s++
            }
        }
        set.add(c)
        e++
        longest = Math.max(longest, e - s )
    }
    return longest;
};
console.log(lengthOfLongestSubstring(s =  "  ")) // = 3 ("abc")

