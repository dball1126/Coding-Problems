/**
 * @param {character[][]} grid
 * @return {number}
 */
// Depth First search
// Time and Space: O(n * m)...rows * cols...dirs is constant at 4 so it is dropped.
var numIslands = function(grid) {
    
    const n = grid.length, m = grid[0].length
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    const dirs = [[1,0], [-1,0], [0,1], [0, -1]]
    let islands = 0;
    const dfs = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j >= m) return;
        if (visited[i][j] || grid[i][j] !== '1') return
        visited[i][j] = true;

        for (let [x, y] of dirs) {
            dfs(i+x, (y+j))
        }
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] === '1' && !(visited[r][c])) {
                islands++
                dfs(r, c)
            }
        }
    }
    return islands
};
console.log(numIslands(grid = grid = [ // = 3
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))
  