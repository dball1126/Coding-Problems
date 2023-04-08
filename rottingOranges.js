class Node {
    constructor(val, pos, distance = 0, visited = false) {
        this.val = val;
        this.pos = pos;
        this.distance = distance;
        this.visited = visited;
    }
}
                // right   down    left    up
const directions = [[0,1], [1,0], [0,-1], [-1,0]]

const getDirections = (pos, grid, distance = 0) => {
    let result = [];

    directions.forEach(dir => {
        let [row, col] = [dir[0], dir[1]];
        let [r, c] = [row + pos[0], col + pos[1]];

        // check if path is valid
        if (r >= 0 && c >= 0 && r <= grid.length - 1 && c <= grid[0].length - 1) {
            // check if orange has been visited/fresh
            if (grid[r][c].val === 1 && !grid[r][c].visited) {
                grid[r][c].distance = distance
                grid[r][c].visited = true
                result.push(grid[r][c])
            }
        }
    })

    return result;
}

var orangesRotting = function(grid) {
    let [oranges, queue, max] = [0, [],  0]

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            grid[r][c] = new Node(grid[r][c], [r, c])
            if (grid[r][c].val === 2) queue.push(grid[r][c])
            if (grid[r][c].val === 1) oranges++;
        }
    }

    while (queue.length) {
        let node = queue.shift();


        if (node.val === 1) {
            node.distance += 1  // update the distance
            oranges--           // keep track of the fresh oranges
            node.val = 2        // mark as visited
        }

        let arr = getDirections(node.pos, grid, node.distance)

        queue.push(...arr)
        max = Math.max(max, node.distance)
    }

    return oranges === 0 ? max : -1;
};

console.log(orangesRotting(grid = [[2,2],[1,1],[0,0],[2,0]]))