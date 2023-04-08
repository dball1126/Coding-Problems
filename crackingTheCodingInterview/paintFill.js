/** Dynamic Programming
 * Base Case: color if out of bounds or already set in the grid
 * State Variables: r and c for idx of rows and columns
 *                  stands for the color at the position in the grid
 * Recurrence Relation:
 *  down = dfs(r+1, c), up = dfs(r-1, c), left = dfs(r, c-1), right = dfs(r, c+1)
 *  dp[r][c] = down || up || left || right
 * 
 * Time and Space: O(row * columns)
 */
const paintFill = (grid, point, color) => {
    let rMax = grid.length, cMax = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rMax || c >= cMax) return color;
        if (grid[r][c] === color) return grid[r][c]
        grid[r][c] = color
        const down = dfs(r+1, c), up = dfs(r-1, c), left = dfs(r, c-1), right = dfs(r, c+1)
        return grid[r][c]
    }
    dfs(point[0], point[1])
    return grid
}

console.log(paintFill([["red","red","red"], ["black","black","black"]], [1,1], "blue"))