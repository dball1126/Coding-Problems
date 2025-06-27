/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
// Probabilty DP Pattern
// Top-Down Dynamic Programming
// Time and Space: O(n^2 * k)
var knightProbability = function(n, k, row, column) {
    
    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)].map(a => [...new Array(k+1)]))
    const dirs = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, 2], [1, 2], [-1,-2], [1, -2]]

    const dp = (r, c, k) => {
        if (r < 0 || c < 0 || r >= n || c >= n) return 0;
        if (k === 0) return 1
        if (memo[r][c][k] !== undefined) return memo[r][c][k]
        let prob = 0
        
        for (let [x, y] of dirs) {
            prob += dp(r + x, c + y, k-1)
        }
        prob =  (prob / 8)
        return memo[r][c][k] = prob
    }
    return dp(row, column, k)
};
console.log(knightProbability(n = 3, k = 2, row = 0, column = 0)) // = 0.0625

