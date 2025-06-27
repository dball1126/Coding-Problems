/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(k * n * m)...k for maxMoves, m for rows, and n for columns
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let m2 = m+2, n2 = n+2, mod = 10**9 + 7 // add extra 2 rows and columns 
    let dp = [], dirs = [[-1,0],[1,0],[0, 1], [0, -1]]
    dp = [...new Array(maxMove+1)].map(a => [...new Array(m2)].map(a => [...new Array(n2)].fill(0)))

    let rMin = (startRow - maxMove > 0) ? startRow - maxMove : 1
    let rMax = (startRow + maxMove <= m) ? startRow + maxMove : m
    let cMin = (startColumn - maxMove > 0) ? startColumn - maxMove  : 1
    let cMax = (startColumn + maxMove <= n) ? startColumn + maxMove : n


    for (let s = 0; s <= maxMove; s++) { // create dp grid, setup base cases
        for (let r = 0; r < m2; r++) {
            for (let c = 0; c < n2; c++) {
                if (c === 0 || c === n2-1 || r === 0 || r === m2-1) { // out of bounds
                    dp[s][r][c] = 1
                }
            }
        }
    }
    for (let s = 1; s <= maxMove; s++) {
        for (let r = rMin; r <= rMax; r++) {
            for (let c = cMin; c <= cMax; c++) {
                let val = 0;
                for (let [x, y] of dirs) {
                    val += dp[s-1][r+x][c+y]
                }
                dp[s][r][c] = val % mod
            }
        }
    }
    return dp[maxMove][startRow+1][startColumn+1]
};
console.log(findPaths(m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0)) // = 6




