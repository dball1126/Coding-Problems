/**
 * @param {character[][]} grid
 * @return {number}
 */
// Depth-First-Search
// Matrix traversal, dynamic programming, 
// Time and Space: O(n * m)...rows * columns
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length, islands = 0
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    visited = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(false))
    
    const dp = (r, c, visited) => {
        if (r < 0 || c < 0 || r >= n || c >= m || visited[r][c] || grid[r][c] !== "1") return 0
        if (memo[r][c] !== undefined) return memo[r][c]
        let num = grid[r][c] === "1" ? 1 : 0
        visited[r][c] = true
        for (let [y, x] of dirs) {
            let ry = r + y, cx = c + x

            dp(ry, cx, visited)
        }
        return memo[r][c] = num
    }
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === "1" && visited[r][c] === false) {
                islands+=1
                dp(r, c, visited)
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

  