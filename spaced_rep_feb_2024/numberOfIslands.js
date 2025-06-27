/**
 * @param {character[][]} grid
 * @return {number}
 */

// Union Find with path compression and union by rank
// Time: O(n * m * 4 + O(1) * amortized time) = O(n * m)
// Space: O(n * m * 2) = O(n * m)
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length, islands = 0
    let rank = new Array(n * m).fill(1), root = [...new Array(n * m).keys()]
    let dirs = [[1,0], [-1,0], [0, 1], [0, -1]]

    const find = (i) => root[i] = i === root[i] ? i : find(root[i]) // path compression
    const union = (i, j) => {
        let p1 = find(i), p2 = find(j)
        if (p1 === p2) return;
        if (rank[p1] > rank[p2]) { // union by rank
            root[p2] = p1
        } else if (rank[p2] > rank[p1]) {
            root[p1] = p2
        } else {
            rank[p1]++
            root[p2] = p1
        }
        islands--
    }
    for (let i = 0; i < n; i++) { // build array
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1") islands++
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            
            for (let [c, r] of dirs) {
                if ((i + c) >= 0 && (j + r) >= 0 && (i + c) < n && (j + r) < m) {
                    if (grid[i][j] === "1" && grid[i+c][j+r] === "1") {

                        union((i * m) + j, (i+c) * m + (j + r))
                    }
                }
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