/**
 * @param {number[][]} grid
 * @return {number}
 */
// Min/Max Path sum Pattern
// Top-Down Dynamic Programming
// Time and Space: O(n^2)
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length
    const memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (r, c) => {
        if (r === n-1 && c === m-1) return grid[r][c]
        if (r >= n || c >= m) return Infinity
        if (memo[r][c] !== undefined) return memo[r][c]

        return memo[r][c] = grid[r][c] + Math.min(dp(r+1, c), dp(r, c+1))
    }
    return dp(0,0)
};
console.log(minPathSum(grid = [
                                [1,3,1],
                                [1,5,1],
                                [4,2,1]])) // 7
                                