/** Dynamic Programming
 * Time and Space: O(n * m) for rows * columns
 * Base Case: 0 if r or c < 0 or out of bounds or cell is blocked
 *            1 r === grid.length -1 and c === grid[0].length-1
 * State Var: r, c for indexes position in grid
 *            stands for num of ways from top left to bottom right of grid
 * Recurrence Relation:
 *      dp(r, c) = dp(r + 1, c) + dp(r, c + 1)
 */
// 'x' stands for blocked cell
const robotInAGrid = (grid) => {
    if (!grid || !grid.length) return 0;
    const memo = [...new Array(grid.length+1)].map(a => [...new Array(grid[0].length+1)])
    const dp = (r, c) => {
        if (r < 0 || c < 0 || r > grid.length-1 || c > grid[0].length-1 || grid[r][c] === 'x') return 0
        if (r === grid.length-1 && c === grid[0].length-1) return 1
        if (memo[r][c] !== undefined) return memo[r][c]
        return memo[r][c] = dp(r + 1, c) + dp(r, c + 1);
    }
    return dp(0, 0);
}
console.log(
    robotInAGrid(
        [[0, 0, 0],
         [0,'x',0],
         [0, 0, 0]]
    )) // = 2 ways

