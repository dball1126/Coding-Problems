/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m * k)
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let memo = [...new Array(m)].map(a => [...new Array(n)].map(a => [...new Array(maxMove)]))
  
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const dp = (r, c, moves) => {
        if (r < 0 || c < 0 || r >= m || c >= n) {
            return 1;
        }
        if (memo[r][c][moves] !== undefined) return memo[r][c][moves]
        if (moves === 0) return 0
        
        let paths = 0
        for (let [x, y] of dirs) {
            paths += (dp(r+ x, c+y, moves-1))
        }
        return memo[r][c][moves] = paths
    }

    return dp(startRow, startColumn, maxMove)
};
console.log(findPaths(8,
    50,
    23,
    5,
    26))