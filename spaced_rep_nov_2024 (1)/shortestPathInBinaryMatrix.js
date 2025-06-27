
// Breadth-First-Search
// Time and Space: O(n * m)...n for rows and m for cols
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length, m = grid[0].length

    if (grid[0][0] === 1 || grid[n-1][m-1] === 1) return -1

    let set = new Set();
    let queue = [[[0,0], 1]]
    const dirs = [[1,1],[1,0],[1,-1], [0,1], [0,-1], [-1,-1],[-1,0],[-1,1]]

    while (queue.length) { // Breadth-First-Search
        let [arr, val] = queue.shift();
        let [x, y]  = arr
        let k = x + ":" + y
        set.add(k)
        grid[x][y] = val
        if (x === n-1 && y === m-1) return val

        for (let [x1, y1] of dirs) {
            let vx = x1 + x, vy = y + y1
            if (vx >= 0 && vy >= 0 && vx < n && vy < m && grid[vx][vy] === 0) {
                let k2 = vx + ":" + vy
                if (!set.has(k2)) {
                    set.add(k2)
                    queue.push([[vx,vy], val + 1])
                }
            }
        }
    }
    return -1
};
console.log(shortestPathBinaryMatrix([[0,0,0],    // = 4 => (0,0 > 0,1 > 1,2 > 2,2)
                                      [1,1,0],
                                      [1,1,0]]))

