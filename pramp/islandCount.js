var numIslands = function(grid) {
    const n = grid.length, m = grid[0].length
    const root = [...new Array(n*m)]
    const rank = [...new Array(n*m)].fill(1)
    const dirs = [[1,0], [-1,0], [0,1],[0,-1]]
    let islands = 0

    const find = (nde) => root[nde] === nde ? root[nde] : find(root[nde])
    const union = (n1, n2) => {
        let p1 = find(n1), p2 = find(n2)
        if (p1 === p2) return
        islands--
        if (rank[p1] > rank[p2]) {
            root[p2] = p1
        } else if (rank[p2] > rank[p1]) {
            root[p1] = p2
        } else {
            rank[p1]++
            root[p2] = p1
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let idx = (i * m) + j
            root[idx] = idx;
            if (grid[i][j] === '1') islands++
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                for(let [x, y] of dirs) {
                    let r = i+x, c = j + y
                    if (r >= 0 && c >= 0 && r < n && c < m) {
                        if (grid[r][c] === '1') {
                            union((i*m) + j, (r*m) + c)
                        }
                    }
                }
            }
        }
    }
    return islands
};

console.log(numIslands(grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))