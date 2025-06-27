/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(r * c)...r for rows and c for columns
// Space: O(1)
var minFallingPathSum = function(matrix) {
    let row = matrix.length, col = matrix[0].length

    for (let r = 1; r < row; r++) {

        for (let c = 0; c < col; c++) {
            let left = Infinity, mid = matrix[r-1][c], right = Infinity
            if (c-1 >= 0) left = matrix[r-1][c-1]
            if (c+1 < col) right = matrix[r-1][c+1]
            let v = matrix[r][c]
            matrix[r][c] = Math.min(mid + v, left+v, right + v)
        }
    }
    let min = Infinity
    for (let r = row-1; r < row; r++) {
        for (let c = 0; c < col; c++) {
            min = Math.min(min, matrix[r][c])
        }
    }
    return min
};
console.log(minFallingPathSum([[2,1,3],
                               [6,5,4],
                               [7,8,9]])) // = 13