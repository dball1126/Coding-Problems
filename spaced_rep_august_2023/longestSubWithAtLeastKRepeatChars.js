/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Sliding Window
// Time and Space: O(n)
var longestSubstring = function(str, k) {
    let longest = 0, charMap = new Map(), s = 0, e = 0, n = str.length

    while (e < n) { // slide right pointer right
        let c = str[e]
        if (!charMap.has(c)) charMap.set(c, 0)
        charMap.set(c, charMap.get(c) + 1)

        if (charMap.get(c) >= k) {
            longest = Math.max(longest, ((e-s)+1))

            while (s < e) { // slide right pointer right
                charMap.set(c, charMap.get(c) - 1)
                s++
                if (charMap.get(c) < k) break
            }
        }
        e++
    }
    return longest
};