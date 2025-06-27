/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let rowLen = matrix.length, colLen = matrix[0].length
    for (let row = 0; row < rowLen; row++) {
        for (let col  = 0; col < colLen; col++) {
            if (row-1 >= 0 && col - 1 >= 0) {
                if (matrix[row-1][col-1] !== matrix[row][col]) return false
            }
        }
    }
    return true;
};
console.log(isToeplitzMatrix([[1,2],[2,2]]))