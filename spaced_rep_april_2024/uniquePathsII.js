/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// DP on Grids
// Top-Down Dynamic Programming
// Time and Space: O(n^2)
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length, m = obstacleGrid[0].length

    const memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (r, c) => {
        if (r === n-1 && c === m-1) return obstacleGrid[r][c] === 0 ? 1 : 0
        if (r >= n || c >= m || obstacleGrid[r][c] === 1) return 0
        if (memo[r][c] !== undefined) return memo[r][c]

        return memo[r][c] = (dp(r+1, c) + dp(r, c+1))
    }
    return dp(0,0)
};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])) // = 2

