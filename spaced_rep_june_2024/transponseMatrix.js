/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    
    let nMat = [...new Array(m)].map(a => [...new Array(n)])


    for (let c = 0; c < m; c++) {
        for (let r = 0; r < n; r++) {
            nMat[c][r] = matrix[r][c]
        }
    }
    return nMat;
};
console.log(transpose( [[1,2,3],[4,5,6],[7,8,9]]))

// [[1, 2, 3], 
// [4, 5, 6]]

// [[1,4,3],
// [2,5,6]]