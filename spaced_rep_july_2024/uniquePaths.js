/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let dp = [...new Array(m)].map(a => [...new Array(n)].fill(0))
    dp[0][0] = 1

    for (let r = 0; r < m; r++) {

        for (let c = 0; c < n; c++) {

            let up = 0, down = 0
            if (r-1 >= 0) up = dp[r-1][c]
            if (c-1 >= 0) down = dp[r][c-1]

            dp[r][c] += (up + down)

        }
    }
    return dp[m-1][n-1] || 0
};
console.log(uniquePaths(m = 3, n = 7))