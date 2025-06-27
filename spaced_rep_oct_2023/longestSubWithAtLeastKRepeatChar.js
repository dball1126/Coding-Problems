/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Dyanmic programming
// Time and Space: O(n^2)
var longestSubstring = function(str, k) {
    let longest = 0, n = str.length
    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(-Infinity))
    const dp = (i, j, valid, invalid) => {
        if (i >= n || j >= n || i > j) return 0
        let c = str[j]
        if (i === j && memo[i][j] !== -Infinity) return memo[i][j]

        let v2 = dp(j+1, j+1, new Map(), new Map())
        if (valid.has(c)) {
            valid.set(c, valid.get(c) + 1)
        } else {
            if (!invalid.has(c)) invalid.set(c, 0)
            invalid.set(c, invalid.get(c) + 1)
            if (invalid.get(c) === k) {
                valid.set(c, invalid.get(c))
                invalid.delete(c)
            }
        }
        let v = 0;
        if (!invalid.size) {
            v = (j -i) + 1
        }
        memo[i][j] = v
        let v3 = dp(i, j+1, valid, invalid)
        longest = Math.max(longest, memo[i][j], v2, v3)
        return memo[i][j]
    }
    dp(0,0, new Map(), new Map())
    return longest
};
console.log(longestSubstring("zaabbc", 2))