/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    
    let dp = [...new Array(m+1)].map(a => [...new Array(n+1)].map(a => [...new Array(maxMove+1)].fill(0)))
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    const mod = 10**9+7
    for (let mv = 0; mv < maxMove; mv++) {

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {

                for (let [x, y] of dirs) {

                    let rX = r + x, cY = c + y;

                    if (rX < 0 || cY < 0 || rX >= m || cY >= n) {
                        dp[r][c][mv] += 1
                    } else {
                        dp[r][c][mv] = ((dp[rX][cY][mv-1] || 0) + dp[r][c][mv]) % mod
                    }
                }
            }   
        }
    }

    return dp[startRow][startColumn][maxMove-1] || 0
};
console.log(findPaths( m = 8, n = 50, maxMove = 23, startRow = 5, startColumn = 26))