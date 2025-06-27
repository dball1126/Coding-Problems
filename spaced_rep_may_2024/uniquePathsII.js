/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// Bottom-Up Dynamic Programming. DP on a Grid.
// Time and Space: O(r * c)...for rows and cols
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let row = obstacleGrid.length, col = obstacleGrid[0].length
    const dp = [...new Array(row+1)].map(a => [...new Array(col+1)].fill(0))
    
    if (obstacleGrid[row-1][col-1] !== 1) {
        dp[row-1][col-1] = 1
    }

    for (let r = row-1; r >= 0; r--) {
        for (let c = col-1; c >= 0; c--) {
            if (obstacleGrid[r][c] !== 1) {
                dp[r][c] += (dp[r][c+1] + dp[r+1][c])
            }
        }
    }

    return dp[0][0]
};
console.log(uniquePathsWithObstacles([[0,0,0],
                                      [0,1,0],
                                      [0,0,0]])) // 2