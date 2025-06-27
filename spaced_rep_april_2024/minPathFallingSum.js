/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var minFallingPathSum = function(matrix) {
    let min = Infinity

    for (let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            
            let lPrev = Infinity, rPrev = Infinity, tPrev = Infinity
            if (r-1 >= 0) {
                tPrev = matrix[r-1][c]
                if (c-1 >= 0) {
                    lPrev = matrix[r-1][c-1]
                } 
                if (c+1 < matrix[0].length) {
                    rPrev = matrix[r-1][c+1]
                }
            }
            if (r !== 0) {
                matrix[r][c] += Math.min(lPrev, rPrev, tPrev)
            }
            
            if (r === matrix.length-1) {
                min = Math.min(min, matrix[r][c])
            }
        }
    }
    return min
};
console.log(minFallingPathSum(matrix = [[-19,57],
                                        [-40,-5]]))