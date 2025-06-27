/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Matrix Traversal
// Time: O(n * m)...rows * cols
// Space: O(1)
var rotate = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    for (let r = 0; r < n; r++) {
        for (let c = r+1; c < n; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
        matrix[r] = matrix[r].reverse()
    }
};

