/**
 * Use 2d array.
 * Base case: return 1 if you reach the bottom right.....0 if out of bounds
 *            return 0 if the value you reach is 1 in the grid.
 * State Variables: r for row, c for column.
 * Recurrence Relation: dp(0, 0) = dp(r+1, c) + dp(c+1, r)
 * Time: O(n * m)
 * Space: O(n * m)
 * 
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    let memo = [...new Array(grid.length+1)].map(a => [...new Array(grid[0].length+1)].fill(-Infinity))

    const dp = (r, c) => {
        if (r >= grid.length || c >= grid[0].length || grid[r][c] === 1) return 0;
        if (r === grid.length-1 && c === grid[0].length-1) return 1;
        if (memo[r][c] !== -Infinity) return memo[r][c]

        return memo[r][c] = dp(r+1,c) + dp(r, c+1)
    }
    return dp(0, 0)
};

console.log(uniquePathsWithObstacles(obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]))