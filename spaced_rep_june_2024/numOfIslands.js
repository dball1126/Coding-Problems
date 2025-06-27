/**
 * @param {character[][]} grid
 * @return {number}
 */
// Recursive Depth-First-Search
// Time and Space: O(n * m)
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length, islands = 0
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= n || c >= m) return;
        if (visited[r][c] || grid[r][c] !== '1') return;
        visited[r][c] = true;

        for (let [x, y] of dirs) dfs (r + x, c + y)
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (!visited[r][c] && grid[r][c] === '1') {
                islands++
                dfs(r, c)
            }
        }
    }
    return islands
};
console.log(numIslands(grid = [ // = 1
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))


  