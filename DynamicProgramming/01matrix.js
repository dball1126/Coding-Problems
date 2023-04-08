// Dynamic Programming (Bottom Up)
// Time and Space: O(r * c) for rows * columns
var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length;
    let dp = [...new Array(m)].map(a => [...new Array(n)].fill(Infinity))

        for (let r = 0; r < mat.length; r++) {
            for (let c = 0; c < mat[r].length; c++) {
                if (mat[r][c] === 0) dp[r][c] = 0;
                let up = Infinity, left = Infinity, right = Infinity, down = Infinity
                if (r-1 >= 0 && dp[r-1][c] !== Infinity) up = dp[r-1][c]
                if (c-1 >= 0 && dp[r][c-1] !== Infinity) left = dp[r][c-1]
                if (r+1 < m && dp[r+1][c] !== Infinity) right = dp[r+1][c]
                if (c+1 < n && dp[r][c+1] !== Infinity) up = dp[r][c+1]

                if (dp[r][c] !== 0) {
                    let minVal = Math.min(up, left, right, down) + 1
                        dp[r][c] = minVal
                }    
            }
        }

        for (let r = mat.length-1; r >= 0; r--) {
            for (let c = mat[r].length-1; c >= 0; c--) {
                if (mat[r][c] === 0) dp[r][c] = 0;
                let up = Infinity, left = Infinity, right = Infinity, down = Infinity
                if (r-1 >= 0) up = dp[r-1][c]
                if (c-1 >= 0) left = dp[r][c-1]
                if (r+1 < m) right = dp[r+1][c]
                if (c+1 < n) up = dp[r][c+1]

                if (dp[r][c] !== 0) {
                    let minVal = Math.min(up, left, right, down) + 1
                        dp[r][c] = Math.min(dp[r][c], minVal )
                }    
            }
        }
    return dp;
};

console.log(updateMatrix(
    [[0,1,1,0,0],
     [0,1,1,0,0],
     [0,1,0,0,1],
     [1,1,1,1,0],
     [1,1,0,1,0]]
    ))

// console.log(updateMatrix([[0,0,1,1,1,1],[0,0,1,1,1,1],[0,0,0,1,1,1], [0,0,0,1,0,1], [0,0,1,1,0,0], [0,0,0,0,0,0]]))