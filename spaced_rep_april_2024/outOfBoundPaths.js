


// Top-Down Dynamic Programming
// Time & Space: O(m * n * k)...k is for maxMoves
var findPaths = function(m, n, maxMove, startRow, startColumn) {

    let memo = [...new Array(m)].map(a => [...new Array(n)].map(a => [...new Array(maxMove)]))
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const dp = (r, c, moves) => {
        if (r < 0 || c < 0 || r >= m || c >= n) return 1;
        if (moves === 0) return 0
        if (memo[r][c][moves] !== undefined) return memo[r][c][moves]
        let paths = 0
        for (let [x, y] of dirs) {
            paths += (dp(r+x, c+y, moves -1) )
        }
        return memo[r][c][moves] = paths % (10**9 + 7)
    }

    return dp(startRow, startColumn, maxMove)
};
console.log(findPaths(m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1)) // = 12

