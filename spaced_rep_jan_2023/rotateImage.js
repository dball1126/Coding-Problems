// Matrix Traversal. In-place value change
// Space: O(1)
// Time: O(r * c)...basically two loops
var rotate = function(matrix) {

    for(let r = 0; r < matrix.length; r++) {
        for (let c = r+1; c < matrix[r].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
        matrix[r].reverse()
    }
    return matrix
};