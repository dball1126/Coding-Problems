/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Top-down dynamic programming
// Time and Space: O(n^2)
var isMatch = function(s, p) {
    let n = s.length, m = p.length;
    const memo = [...new Array(n+1)].map(a =>
            [...new Array(m+1)]
    )
    const dp = (i, j) => {
        if (i >= n && j >= m) return true;
        if (memo[i][j] !== undefined) return memo[i][j];
        let v2 = false, v3 = false;

        if (p[j] === "*") {
            v2 = dp(i, j+1)
            if (i < n) v2 = v2 || dp(i+1, j)
            v2 = v2 || dp(i < n ? i+1 : i, j+1)
        }
        if (i < n && j < m) {
            if (s[i] === p[j] || p[j] === "?") {
                v3 = dp(i+1, j+1)
            }
        }
        return memo[i][j] =  v2 || v3
    }
    return dp(0,0)
};
console.log(isMatch(s = "adceb", p = "*a*b")) // = true

