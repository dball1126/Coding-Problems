/**
 * @param {number[][]} grid
 * @return {number}
 */
// Depth-First-Search
// Time and Space: O(n * m)...rows * columns
var maxAreaOfIsland = function(grid) {
    if (!grid.length) return 0
    let maxArea = 0, rowLen = grid.length, colLen = grid[0].length
    const dirs = [[-1, 0], [1,0], [0,1], [0,-1]]
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            let islandCount = 0
            if (grid[r][c] === 1) {
                let stack = [[r, c]]
                while (stack.length) {
                    let [row, col] = stack.pop()
                    islandCount++
                    grid[r][c] = 0;
                    for (let [x, y] of dirs) {
                        let newRow = row + x, newcol = col + y
                        if (newRow < 0 || newcol < 0 || newRow >= rowLen || newcol >= colLen || grid[newRow][newcol] !== 1) continue
                        grid[newRow][newcol] = 0
                        stack.push([newRow, newcol])
                    }
                }
            }
            maxArea = Math.max(maxArea, islandCount)
        }
    }
    return maxArea
};
console.log(maxAreaOfIsland( grid =  grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))