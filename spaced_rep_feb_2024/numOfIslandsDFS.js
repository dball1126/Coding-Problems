/**
 * @param {character[][]} grid
 * @return {number}
 */
// Depth-First-Search
// Time and Space: O(n * m)...rows * columns
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length, islands = 0
    const visited = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(false))
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= n || c >= m) return;
        if (grid[r][c] !== '1' || visited[r][c]) return;
        visited[r][c] = true;
        dirs.forEach(([x,y]) => {
            dfs(r+x, c+y)
        })
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] === '1' && visited[r][c] === false) {
                islands++;
                dfs(r, c)
            }
        }
    }
    return islands
};
console.log(numIslands(grid = [ // = 3
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))
  