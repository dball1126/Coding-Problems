/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    
    let n = matrix.length, m = matrix[0].length;

    for (let r = 0; r < n; r++) {
        for (let c = r+1; c < m; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
        let i = 0, j = m-1
        while (i < j) {
            [matrix[r][j], matrix[r][i]] = [matrix[r][i], matrix[r][j]]
            i++; j--;
        }
    }
    return matrix
};
console.log(rotate( matrix = [[1,2,3],[4,5,6],[7,8,9]]))