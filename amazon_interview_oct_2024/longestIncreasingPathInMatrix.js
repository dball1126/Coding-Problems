/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Dynamic Programming
// Matrix Matraversal
// Time and Space: O(n * m)
var longestIncreasingPath = function(matrix) {
    let n = matrix.length, m = matrix[0].length, max = 0
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const dp = (r, c) => {
        if (r < 0 || c < 0 || r >= n || c >= m) return 0
        if (memo[r][c] !== undefined) return memo[r][c]
        let count = 0
        for (let [x, y] of dirs) {
            let rx = r + x, cy = c + y
            if (rx >= 0 && cy >= 0 && rx < n && cy < m && matrix[rx][cy] > matrix[r][c]) {
                count = Math.max(count, 1 + dp(rx, cy))
            }
        }
        return memo[r][c] = count
    }
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            max = Math.max(max, dp(row, col) + 1)
        }
    }
    return max
};
console.log(longestIncreasingPath([[3,4,5],
                                   [3,2,6],
                                   [2,2,1]]))// = 4 (3 -> 4 -> 5  -> 6)

                                   
