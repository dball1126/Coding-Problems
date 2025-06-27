/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// var findPaths = function(m, n, maxMove, startRow, startColumn) {
//     let memo = [...new Array(m+1)].map(a => [...new Array(n+1)].map(a =>
//                 [...new Array(maxMove+1)]))
//         const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
//     let mod = 10**9+7
//     const dp = (r, c, move) => {
//         if (r < 0 || c < 0 || r >= m || c >= n) return 1
//         if (move >= maxMove) return 0
//         if (memo[r][c][move] !== undefined) return memo[r][c][move]

//         let v = 0
//         for (let [x, y] of dirs) {
//             v += (dp(r+x, c+y, move+1) % mod)
//         }
//         return memo[r][c][move] = v % mod;
//     }
//     return dp(startRow, startColumn, 0)
// };

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let dp = [...new Array(m+2)].map(a => [...new Array(n+2)].map(a =>
                [...new Array(maxMove+1)].fill(0)))
                startRow++
                startColumn++
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let mod = 10**9+7

    for (let mv = 1; mv <= maxMove; mv++) {

        for (let r = 1; r < m; r++) {
             for (let c = 1; c < n; c++) {
     
                for (let [x, y] of dirs) {

                    let v = dp[r+x][c+y]
                    if (r < 1 || c < 1 || r >= m+1 || c >= n+1) {
                        dp[r][c][mv] = 1
                    } else {
                        dp[r][c][mv] = v
                    }
                }
             }
        }
    }
    console.log(dp)
    return dp[startRow][startColumn][maxMove]

};
console.log(findPaths(m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0))