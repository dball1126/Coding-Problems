/**
 * State Var: r and c for row and column idx .... bottom of matrix
 *            (stands for minimum sum to bottom of matrix)
 * Base Case: last row of dp will be the matrix values for the last row
 *            Infinity if we're out of bounds.
 * Recurrence relation:
 *      dp(r, c) = Math.min(dp(r, c+1), matrix[r][c] + Math.min(dp(r+1, c), dp(r+1, c+1), dp(r+1, c-1)))
 */
// Top down
// var minFallingPathSum = function(matrix) {
//     let [m, n] = [matrix.length, matrix[0].length]
//     const memo = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(Infinity))
//     memo[m-1] = [...matrix[m-1]]
//     let min = Infinity
//     const dp = (r, c) => {
//         if (r >= m || c >= n || r < 0 || c < 0) return Infinity;
//         if (memo[r][c] !== Infinity) return memo[r][c];
//             return memo[r][c] = matrix[r][c] + Math.min(dp(r+1, c), dp(r+1, c+1), dp(r+1, c-1))
//     }
//     for (let i = 0; i < n; i++) {
//         min = Math.min(min, dp(0, i))
//     }
//     return min
// };
// Bottom up
var minFallingPathSum = function(matrix) {
    let [m, n] = [matrix.length, matrix[0].length]
    const dp = [...new Array(m+1)].map(a => [...new Array(n+1)].fill(Infinity))
    dp[m-1] = [...matrix[m-1], Infinity]
    let min = Infinity;

    for (let r = m-2; r >= 0; r--) {
        for (let c = n-1; c >= 0; c--) {
            let val = dp[r+1][c-1] === undefined ? Infinity : dp[r+1][c-1]
            dp[r][c] = matrix[r][c] + Math.min(dp[r+1][c], dp[r+1][c+1], val)
            if (r === 0) min = Math.min(min, dp[r][c])
        }
    }
    if (m === 1) {
        matrix.forEach(a => a.forEach(v => min = Math.min(min, v)))
    }
    return min
}
console.log(minFallingPathSum(trix = 
    [[-80,-13,22]]))