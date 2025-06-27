/**
 * @param {number[][]} grid
 * @return {number}
 */

// Depth-first-Search
// Time and Space: O((n * m))...n for rows...m for columns
var largestIsland = function(grid) {
    let n = grid.length, m = grid[0].length, largestIsland = 0, islandMap = new Map()
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]] // constant at 4
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false)) // O (n * m)
    const dfs = (i, j, key) => { // setup islands
        if (i < 0 || j < 0 || i >= n || j >= m) return;
        if (visited[i][j] || grid[i][j] !== 1) return;
        if (!islandMap.has(key)) islandMap.set(key, 0)
        visited[i][j] = key;
        islandMap.set(key, islandMap.get(key) + 1) // update root key with island count
        for (let [r, c] of dirs) { // constant at 4
            dfs(i + r, c + j, key)
        }
    }
    for (let r = 0; r < n; r++) { // O(n * m) * 4
        for(let c = 0; c < m; c++) {
            if (grid[r][c] === 1) {
                const key = r + "" + c
                dfs(r, c, key)
                if (islandMap.has(key)) {
                    largestIsland = Math.max(largestIsland, islandMap.get(key))
                }
            }
        }
    }
    for (let r = 0; r < n; r++) { // O(n * m) * 4
        for(let c = 0; c < m; c++) {
            if (grid[r][c] === 0) {
                let value = 1, keys = new Set()
                for (let i = 0; i < dirs.length; i++) { 
                    const dir1 = [r1, c1] = dirs[i]
                    let rr1 = r+ r1, cc1 = c + c1
                    if (rr1 >= 0  && rr1 < n && cc1 >= 0 && cc1 < m) {
                        if (typeof visited[rr1][cc1] === 'string' && !keys.has(visited[rr1][cc1])) {
                            keys.add(visited[rr1][cc1])
                            value += islandMap.get(visited[rr1][cc1])
                        }
                    }
                }
                largestIsland = Math.max(largestIsland, value)
            }
        }
    }
    return largestIsland
};
console.log(largestIsland([[1,0],[0,1]])) // = 3


// i = 0, j = 1

// key1 = 0+1 + "" + 1 + 0 === 1
// key2 = 0 + 0 + "" + 1 + -1 === 1