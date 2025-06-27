/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length
    const memo = [...new Array(n)].map(a => [...new Array(n)])

    const dfs = (i, j) => {
        if (i > j) return 0
        if (i === j) {
            return  s[i] === s[j] ? 1: 0
        }
        if (i+1 === j && s[i] === s[j]) {
            return 2
        }
        if (memo[i][j] !== undefined) return memo[i][j]
        let val1 = 0, val2 = 0
        if (s[i] === s[j]) {
            val1 = dfs(i+1, j-1) + 2
        } else {
            val2 = Math.max(dfs(i+1, j), dfs(i, j-1))
        }
        return memo[i][j] = Math.max(val1, val2)
    }
    return dfs(0, n-1)
};
console.log(longestPalindromeSubseq("asdfsaw"))