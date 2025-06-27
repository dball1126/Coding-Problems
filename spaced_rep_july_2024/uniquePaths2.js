/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    const n = obstacleGrid.length, m = obstacleGrid[0].length

    const dp = [...new Array(n+1)].map(a => [...new Array(m + 1)].fill(0))
    dp[0][0] = 1

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (obstacleGrid[r][c] === 1) continue;

            if (r-1 >= 0 && obstacleGrid[r-1][c] !== 1) { // can we go down
                dp[r][c] += dp[r-1][c]
            }

            if (c-1 >= 0 && obstacleGrid[r][c-1] !== 1) { // can we go right
                dp[r][c] += dp[r][c-1]
            }
        }
    }
    return dp[n-1][m-1]
};
console.log(uniquePathsWithObstacles( [[0,0,0],
                                       [0,1,0],
                                       [0,0,0]])) // = 2

                                       