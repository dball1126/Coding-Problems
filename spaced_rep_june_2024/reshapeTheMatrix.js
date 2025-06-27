/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let n = mat.length, m = mat[0].length
    if (n * m !== r * c) return mat

    const reshape = [...new Array(r)].map(a => [...new Array(c)])

    let row = 0, col = 0

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            reshape[i][j] = mat[row][col]
            if (col+1 < m) {
                col++
            } else {
                row++; col = 0;
            }
        }
    }
    return reshape
};
console.log(matrixReshape(mat = [[1,2],[3,4]], r = 2, c = 4))