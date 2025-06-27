/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time & Space: O(m * n * k)...k is for maxMove
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    
    const memo = [...new Array(m+1)].map(a => [...new Array(n+1)].map(a => [...new Array(maxMove+1)]))
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    const mod = (10**9) + 7

    const dp = (r, c, move) => {
        if (r < 0 || c < 0 || r >= m || c >= n) return 1;
        if (move === 0) return 0
        if (memo[r][c][move] !== undefined) return memo[r][c][move]

        let val = 0

        for (let [row, col] of dirs) {

            val += dp(r + row, col + c, move-1)
            val %= mod
        }

        return memo[r][c][move] = val
    }
    return dp(startRow, startColumn, maxMove)
};
console.log(findPaths( m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0))
// m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// = 6

