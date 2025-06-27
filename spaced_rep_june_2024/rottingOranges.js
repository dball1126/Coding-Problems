/**
 * @param {number[][]} grid
 * @return {number}
 */
// Iterative, Breadth-First-Search
// Time & Space: O(n * m)...n for rows and m for columns
var orangesRotting = function(grid) {
    let n = grid.length, m = grid[0].length, mins = 0, oranges = 0, queue = []
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] === 1) {
                oranges++
            } else if (grid[r][c] === 2) {
                queue.push([r, c, 0])
            }
        }
    }

    while (queue.length) {
        let [r, c, v] = queue.shift()
        mins = Math.max(mins, v)

        for (let [x, y] of dirs) {
            let rx = r + x, cy = c + y
            if (rx < 0 || cy < 0 || rx >= n || cy >= m) continue;
            if (grid[rx][cy] === 1) {
                queue.push([rx, cy, 1 + v])
                grid[rx][cy] = 2 // reuse input array, mark as 'Rotten'
                oranges--
            }
        }
    }
    return oranges === 0 ? mins : -1
};
console.log(orangesRotting( [[2,1,1],[1,1,0],[0,1,1]])) // = 4


