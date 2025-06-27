/**
 * @param {string} s
 * @return {string}
 */
// Top-down Dynamic Programming
// Palindromes
// Time & Space: O(n^2)
var longestPalindrome = function(str) {
    let longest = ""
    let n = str.length
    let memo = [...new Array(n)].map(a => [...new Array(n)])

    const dp  = (i, j, curr) => {
        if (i < 0 || j >= n) return ""
        if (str[i] !== str[j]) return ""
        if (memo[i][j] !== undefined) return memo[i][j]
        curr = str[i] + curr + str[j]

        if (longest.length < curr.length) longest = curr;
        dp(i-1, j+1, curr)
        return memo[i][j] = curr
    }

    for (let i = 0; i < n; i++) {
        if (longest.length < 1) longest = str[i]
        dp(i-1, i+1, str[i])
        if (str[i] === str[i+1]) {
            if (longest.length < 2) longest = str[i] + str[i+1]
            dp(i-1, i+2, str[i] + str[i+1])
        }
    }
    return longest
};
console.log(longestPalindrome("sadfasdbbdeee"))
