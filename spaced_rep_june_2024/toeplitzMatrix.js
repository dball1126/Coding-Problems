/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length


    for (let row = 0 ;row < n; row++) {
        let c = 0, r = row
        while (r < n-1 && c < m-1) {
            r++; c++
            if (matrix[r-1][c-1] !== matrix[r][c]) return false;
        }
    }

    for (let col = 0; col < m; col++) {
        let c = col, r = 0
        while (r < n-1 && c < m-1) {
            r++; c++
            if (matrix[r][c] !== matrix[r-1][c-1]) return false;
        }
    }
    return true;
};
console.log(isToeplitzMatrix(matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]))