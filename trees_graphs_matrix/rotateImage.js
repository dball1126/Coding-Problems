// Time: O(n + m) // rows, cols
// Space: O(1) // in place
var rotate = function(matrix) {
    if (!matrix.length) return matrix
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r+1; c < matrix[r].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
        matrix[r] = matrix[r].reverse()
    }
    return matrix
};
console.log(rotate(matrix = [[1,2,3],[4,5,6],[7,8,9]]))