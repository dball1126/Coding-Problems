/**
 * @param {number[][]} grid
 * @return {number}
 */
// Bottom-Up Dyanmic Programming
// Time and Space: O(n * m)
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length

    const dp = [...new Array(n+1)].map(a => 
               [...new Array(m+1)].fill(Infinity)) // base case
    dp[n-1][m-1] = grid[n-1][m-1] // base case

    for (let r = n-1; r >= 0; r--) {
        for (let c = m-1; c >= 0; c--) {
            if (r === n-1 && c === m-1) continue;
            const v = grid[r][c]
            let v1 = dp[r+1][c], // down
                v2 = dp[r][c+1]  // right

            dp[r][c] = Math.min(v1, v2) + v
        }
    }
    return dp[0][0]
};
console.log(minPathSum([[1,3,1],
                        [1,5,1],
                        [4,2,1]])) // = 7  (1--> 3--> 1--> 1--> 1)

                        