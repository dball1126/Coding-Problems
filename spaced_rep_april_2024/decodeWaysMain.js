/**
 * @param {string} s
 * @return {number}
 */
// Count Distinct Ways
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var numDecodings = function(s) {
    let n = s.length
    const memo = [...new Array(n)]

    const ways = (i) => {
        if (s[i] === '0') return 0
        if (i === n-1 || i >=n) return 1
        if (memo[i] !== undefined) return memo[i]

        if (s[i+1] === '0' && s[i] <= '2') {
            return memo[i] = ways(i+2)
        } else if (parseInt(s[i] + s[i+1]) <= 26) {
            return memo[i] = ways(i+1) + ways(i+2)
        } else {
            return memo[i] = ways(i+1)
        }
    }
    return ways(0)
};
console.log(numDecodings("223")) // = 3


