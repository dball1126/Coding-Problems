// Time: O(n * m)...n * m + n * m = O(n * m)
// Space: O(1)
var rotate = function(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r+1; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
        matrix[r].reverse()
    }
    return matrix;
};
