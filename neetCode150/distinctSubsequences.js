
// Top-Down: Dynamic Programming
// Time and Space: O(n * m)...n for s length and m for t length
var numDistinct = function(s, t) {
    let n = s.length, m = t.length
    let memo = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(-Infinity))

    const dp = (i, j) => {
        if (i >= n || j >= m) return 0;
        if (i === n-1 && j === m-1) {
            return memo[i][j] = s[i] === t[j] ? 1 : 0
        }
        if (memo[i][j] !== -Infinity) return memo[i][j];
        let val = 0
        
        if (s[i] === t[j]) {
            if (j === m-1) val += 1
            val += dp(i+1, j+1)
        }
        val += dp(i+1, j)
        return memo[i][j] = val
    }
    return dp(0, 0)
};
console.log(numDistinct(s = "babgbag", t = "bag"))// = 5
