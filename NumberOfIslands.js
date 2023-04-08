var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        
        for (let j = 0; j < grid[i].length; j++) {
            const ele = grid[i][j];
            if (ele === "1") {
                count++;
                dfs(i, j, grid);
            }
            
        }
        
    }
    return count;
};

const dfs = (row, i, grid) => {
if (!grid[row] || !grid[row][i]) return;
if (grid[row][i] === "0") return;

    grid[row][i] = "0"
    dfs(row, i+1, grid)
    dfs(row, i-1, grid)
    dfs(row+1, i, grid)
    dfs(row-1, i, grid)
}

console.log(numIslands(
    [["1","0","1","1","1"],
     ["1","0","1","0","1"],]
     ["1","1","1","0","1"]]))