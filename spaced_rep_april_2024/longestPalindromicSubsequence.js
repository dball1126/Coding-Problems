// Top-down Dynamic Programming
// Palindromes
// Time & Space: O(n^2)
var longestPalindromeSubseq = function(str) {
    let longest = 0
    let n = str.length
    let memo = [...new Array(n)].map(a => [...new Array(n)])

    const dp  = (i, j, curr) => {
        if (i < 0 || j >= n) return 0
        if (memo[i][j] !== undefined) return memo[i][j]
        let max2 = 0
        if (str[i] === str[j]) {
            if (longest < (curr + 2)) longest = curr + 2;
            max2 = curr+2
            dp(i-1, j+1, curr + 2)
        } else {
            dp(i-1, j, curr);
            dp(i, j+1, curr)
        }

        
        longest = Math.max(longest, curr, max2)
        return memo[i][j] = curr
    }

    for (let i = 0; i < n; i++) {
        if (longest < 1) longest = 1
        dp(i-1, i+1, 1)
        if (str[i] === str[i+1]) {
            if (longest < 2) longest = 2
            dp(i-1, i+2, 2)
        }
    }
    return longest
};
console.log(longestPalindromeSubseq("abba"))