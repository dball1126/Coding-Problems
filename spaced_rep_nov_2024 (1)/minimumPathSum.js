/**
 * @param {number[][]} grid
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m)
// Space: O(n)
var minPathSum = function(grid) {
    let prev = [...new Array(grid[0].length)].fill(Infinity)

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (r === 0 && c == 0) {
                prev[c] = grid[r][c]
            } else {
                let left = Infinity, up = prev[c];
                if (c-1 >= 0) left = prev[c-1]
                prev[c] = Math.min(left, up) + grid[r][c]
            }
        }
    }
    return prev[prev.length-1]
};
console.log(minPathSum([[1,3,1],
                        [1,5,1],
                        [4,2,1]])) 
// 1->3->1->1->1 = 7

