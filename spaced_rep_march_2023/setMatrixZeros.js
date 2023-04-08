
// Time: O(n * m)...rows * cols
// Space: O(n + m)...rows + cols
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    const rows = [...new Array(m)], cols = [...new Array(n)];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                rows[r] = 0; cols[c] = 0;
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rows[r] === 0 || cols[c] === 0) {
                matrix[r][c] = 0
            }
        }
    }
    return matrix;
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))//=[[1,0,1],[0,0,0],[1,0,1]]
