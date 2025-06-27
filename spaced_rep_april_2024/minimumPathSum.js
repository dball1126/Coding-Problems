/**
 * @param {number[][]} grid
 * @return {number}
 */
// Dynamic Programming
// Time and Space: O(n * m)
var minPathSum = function(grid) { // Top-Down 
    let n = grid.length, m = grid[0].length
    let memo = [...new Array(n)].map(a => [...new Array(m)])

    const dp = (r, c) => {
        if (r === n-1 && c === m-1) return grid[r][c]
        if (r < 0 || c < 0 || r >= n || c >= m) return Infinity;
        if (memo[r][c] !== undefined) return memo[r][c]

        return memo[r][c] = grid[r][c] + Math.min(dp(r+1, c), dp(r, c+1))
    }
    return dp(0, 0)
};


var minPathSum = function(grid) { // Bottom-Up
    let n = grid.length, m = grid[0].length
    let memo = [...new Array(n+2)].map(a => [...new Array(m+2)].fill(Infinity))

    for (let r = n-1; r >= 0; r--) {
        for (let c = m-1; c >= 0; c--) {
            if (r === n-1 && c === m-1) {
                memo[r][c] = grid[r][c]; 
                continue;
            }
            memo[r][c] = grid[r][c] + Math.min(memo[r+1][c], memo[r][c+1])
        }
    }
    return memo[0][0]
}
console.log(minPathSum([[1,2,3],[4,5,6]])) // = 12


