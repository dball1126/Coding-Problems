/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
    let charCounts = new Map(), longest = -Infinity
    for (let i = 0; i < s.length; i++) {
        if (!charCounts.has(s[i])) charCounts.set(s[i], 0)
        charCounts.set(s[i], charCounts.get(s[i]) + 1)
    }

    let l = 0, r = 0
    let currMap = new Map(), valid = new Set()
    while (r < s.length) {

        if (!currMap.has(s[r])) currMap.set(s[r] ,0)
        currMap.set(s[r], currMap.get(s[r]) + 1)
        if (currMap.get(s[r]) >= k) {
            valid.add(s[r])
        }

        if (valid.size === currMap.size && currMap.size >= 1) {

            longest = Math.max(longest, r - l + 1)
        }

        if (charCounts.get(s[r]) < k) {
            valid.delete(s[r])
            currMap.delete(s[r])
            while (l <= r) {
                if (valid.size === currMap.size && currMap.size >= 1) {

                    longest = Math.max(longest, r - l)
                }
                if (currMap.has(s[l])) {
                    currMap.set(s[l], currMap.get(s[l]) - 1)
                    if (currMap.get(s[l]) === 0) {
                        currMap.delete(s[l])
                        valid.delete(s[l])
                    }
                    if (currMap.get(s[l]) < k) valid.delete(s[l])
                }
                l++
            }
            if (valid.size === currMap.size && currMap.size >= 1) {
                longest = Math.max(longest, r - l)
            }
        }
        r++
    }

    return longest === -Infinity ? 0 : longest
};



console.log(longestSubstring( a= "ababacb", k = 3))