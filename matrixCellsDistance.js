class NodeH {
    constructor(val, data) {
        this.val = val; this.data = data;
    }
}

// Breadth-First-Search
// Time & Space: O(rows * cols)
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let visited = [...new Array(rows)]
        .map(a => [...new Array(cols)].fill(false))
    let order = [], queue = []
    visited[rCenter][cCenter] = true
    queue.push(new NodeH(0, [rCenter, cCenter]))
    let dir = [[1,0], [0, 1], [0, -1], [-1, 0]]
    while (queue.length) {
        let n = queue.shift()
        let [x, y] = n.data;
        order.push([x, y])

        dir.forEach(d => {
            let [dX, dY] = d
            let xIdx = (x + dX), yIdx = (y + dY)
            if (xIdx >= 0 &&  xIdx < rows && yIdx >= 0 && yIdx < cols) {
                if (!visited[xIdx][yIdx]) {
                    visited[xIdx][yIdx] = true;
                    let val = Math.abs(xIdx - rCenter) + Math.abs(yIdx - cCenter)
                    queue.push(new NodeH(val, [xIdx, yIdx]))
                }
            }
        })
    }
    return order;
};

console.log(allCellsDistOrder(rows = 2, cols = 3, rCenter = 1, cCenter = 2))