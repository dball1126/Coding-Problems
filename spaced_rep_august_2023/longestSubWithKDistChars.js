/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Sliding Window
// Time and Space: O(n)
var lengthOfLongestSubstringKDistinct = function(str, k) {
    if (!k) return 0
    let charMap = new Map(), s = 0, e = 0, n = str.length
    let longestSub = 0
    while (e < n) { // slide right pointer right
        if (!charMap.has(str[e])) charMap.set(str[e], 0)
        charMap.set(str[e], charMap.get(str[e]) + 1)

        if (charMap.size > k) {
            while (s < e) { // slide right pointer right

                charMap.set(str[s], charMap.get(str[s]) - 1)
                if (charMap.get(str[s]) === 0) charMap.delete(str[s])
                s++
                if (charMap.size <= k) break;
            }
        }

        longestSub = Math.max(longestSub, ((e+1)-s))
        e++
    }
    return longestSub
};

console.log(lengthOfLongestSubstringKDistinct(  "ab", k = 1))