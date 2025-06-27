/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length
    let root = [...((new Array(n+m)).keys())]
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    let visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))

    const find = (i) => root[i] = (i === root[i] ? i : find(root[i]))
    const union = (i, j) => {
        let p1 = find(i), p2 = find(j)
        if (p1 === p2) return
        root[p2] = p1
    }
    const map = new Map()

    const dfs = (i, j) => {
        if (i >= n || j >=m) return
        if (visited[i][j]) return

        for (let [r, c] of dirs) {
            if ((r+i) < n && (c + j) < m) {
                if (grid[r+i][c+j] === "1") {
                    union(i, j)
                    dfs(r+i, c+j)
                }
            }
        }

    }

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {

            if (grid[i][j] === "1") {
                if (!visited.has[i][j]) {
                    dfs(i, j)
                    
                }
            }

        }

    }
    
};