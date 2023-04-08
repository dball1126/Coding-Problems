// Breadth-First-Search, Matrix Traversal
// Time and Space: O(m * n)...rows * columns
var hasValidPath = function(grid) {
    let m = grid.length, n = grid[0].length;
    let visited = [...new Array(m)].map(a => [...new Array(n)].fill(false))
    let left = [0, -1], right = [0, 1], up = [-1, 0], down = [1, 0]
    let queue = [[0,0]]; visited[0][0] = true;
    while (queue.length) {
        let [x, y] = queue.shift();
        if (x === m-1 && y === n-1) return true;
        let val = grid[x][y]
        const checkPosition = (pos, type) =>{
            let set = new Set();
            if (type === "left") {
                set = new Set([6, 1, 4])
            } else if (type === "right") {
                set = new Set([5, 1, 3])
            } else if (type === "up") {
                set = new Set([2, 4, 3])
            } else if (type === "down") {
                set = new Set([2, 5, 6])
            }
            let x1 = x + pos[0], y1 = y + pos[1]
            if (x1 >= 0 && y1 >= 0 && x1 < m && y1 < n) {
                if (!visited[x1][y1] && set.has(grid[x1][y1])) {
                    visited[x1][y1] = true;
                    queue.push([x1, y1])
                }
            }
        }
        if (val === 1) {
            checkPosition(left, "left"); checkPosition(right, "right")
        } else if (val === 2) {
            checkPosition(up, "up"); checkPosition(down, "down")
        } else if (val === 3) {
            checkPosition(left, "left"); checkPosition(down, "down")
        } else if (val === 4) {
            checkPosition(right, "right"); checkPosition(down, "down")
        } else if (val === 5) {
            checkPosition(left, "left"); checkPosition(up, "up")
        } else if (val === 6) {
            checkPosition(up, "up"); checkPosition(right, "right")
        }
    }
    return false;
};

console.log(hasValidPath(grid = 
    [[6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,3]]))