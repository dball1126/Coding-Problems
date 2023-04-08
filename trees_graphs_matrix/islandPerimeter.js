/**
 * Time: O(r * c) rows * columns in the grid
 * Space: O(1)
 */
var islandPerimeter = function(grid) {
    let permiter = 0, maxUp = 0, maxDown = grid.length-1, maxLeft = 0, maxRight = grid[0].length-1
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            let curr = grid[r][c]
            if (curr === 1) {

                if (r - 1 < maxUp || grid[r-1][c] === 0) permiter += 1
                if (r + 1 > maxDown || grid[r+1][c] === 0) permiter += 1
                if (c - 1 < maxLeft || grid[r][c-1] === 0) permiter += 1
                if (c + 1 > maxRight || grid[r][c+1] === 0) permiter += 1
            }
        }
    }
    return permiter
};
console.log(islandPerimeter( grid = [[0,1,0,0],
                                     [1,1,1,0],
                                     [0,1,0,0],
                                     [1,1,0,0]])) // = 16

                                     